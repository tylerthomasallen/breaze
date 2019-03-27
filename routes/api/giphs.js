const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const passport = require('passport');
const Giph = require('../../models/Giph');

// helper functions to format responses from the giph API

const formattedTitle = (str) => {
  const result = [];
  const arr = str.split(' ');
  
  let curr = arr[0];
  let i = 0;

  while (curr !== 'GIF' && i < arr.length) {
    result.push(curr)
    i += 1;
    curr = arr[i];
  }

  return result.join(' ');
}

const getUserInfo = (user, field) => {
  if (user !== undefined) {
    return user[field]
  }

  return null;
}

router.get("/trending" , async (req, res) => {
  let { offset } = req.query;

  if (offset >= 1) {
    offset += 1;
  }
  
  try {
    const trending = await fetch(`https://api.giphy.com/v1/gifs/trending?limit=5&offset=${offset}`, {
      headers: {
        "Content-Type": "application/json",
        "api_key": "cCMV85rqh1Z5dmF52GKxGqFlrcFd87R2",
      }
    })

    const trendingJSON = await trending.json()
    const trendingResults = {};

    trendingJSON.data.forEach(item => {
      const formattedItem = { 
        url: item.images.original.url, 
        id: item.id,
        title: formattedTitle(item.title),
        username: getUserInfo(item.user, 'display_name') || 'Anonymous',
        avatar: getUserInfo(item.user, 'avatar_url') || 'https://i.imgur.com/zPKzLoe.gif' 
      }

      trendingResults[item.id] = formattedItem;
    })
    
    // trendingJSON.data.forEach(item => formatted.push({
    //   url: item.images.original.url, 
    //   id: item.id,
    //   title: formattedTitle(item.title),
    //   username: getUserInfo(item.user, 'display_name') || 'Anonymous',
    //   avatar: getUserInfo(item.user, 'avatar_url') || 'https://i.imgur.com/zPKzLoe.gif'
    //     }
    //   )
    // )
    
    return res.json(trendingResults)
    
  } catch(err) {
    console.log(err);
  }
})

router.get("/search", async (req, res) => {
  let { query, offset } = req.query;
  
  if (offset >= 1) {
    offset += 1;
  }
  
  try {
    const search = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=5&offset=${offset}`, {
      headers: {
        "Content-Type": "application/json",
        "api_key": "cCMV85rqh1Z5dmF52GKxGqFlrcFd87R2",
      }
    })
    
    const searchJSON = await search.json();
    const searchResults = {};

    searchJSON.data.forEach(item => {
      const formattedItem = { 
        url: item.images.original.url, 
        id: item.id,
        title: formattedTitle(item.title),
        username: getUserInfo(item.user, 'display_name') || 'Anonymous',
        avatar: getUserInfo(item.user, 'avatar_url') || 'https://i.imgur.com/zPKzLoe.gif' 
      }

      searchResults[item.id] = formattedItem;
    })
    

    return res.json(searchResults);
  } catch(err) {
    console.log(err);
  }
})

router.get('/getfavorites', async (req, res) => {
  const { id } = req.query;
  
  const favRes = await Giph.find( { favorite_id: id } );
  const favorites = {}

  favRes.forEach( ( { avatar, id, title, url, username } ) => {
    favorites[id] = { avatar, id, title, username, url }
  })

  res.json( { favorites } );

})

router.post('/addfavorite', 
  passport.authenticate('jwt', { session: false }), 
  
  async (req, res) => {
    const { giph, user } = req.body.params;

    const favRes = await Giph.find( { favorite_id: user.id } )
    const favIds = favRes.map( ( { id } ) => id );

    if (favIds.includes(giph.id)) {
      res.status(400).json('Giph already a favorite')
    }

    const newGiph = await new Giph({
      favorite_id: user.id,
      ...giph
    });


    await newGiph.save();
    return res.status(200).json('Favorite added');

  }
);

router.delete('/deletefavorite',
  passport.authenticate('jwt', { session: false }), 
  async (req, res) => {
    const user = JSON.parse(req.query.user)
    const giph = JSON.parse(req.query.giph)

    try {
      const giphRes = await Giph.deleteOne( { favorite_id: user.id, id: giph.id } )
      console.log(`Delete count: ${giphRes.deletedCount}`)
      
      if (giphRes.deletedCount === 1) {
        return res.status(200).json('Delete successful')
      } else {
        return res.status(400).json('Error deleting favorite')
      }
    } catch (err) {
      return res.status(400).json('Error deleting favorite')
    }
  }
)

module.exports = router;
