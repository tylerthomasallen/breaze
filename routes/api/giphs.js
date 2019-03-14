const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

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
    const formatted = [];
    
    trendingJSON.data.forEach(item => formatted.push({
      url: item.images.original.url, 
      id: item.id,
      title: formattedTitle(item.title),
      username: getUserInfo(item.user, 'display_name') || 'Anonymous',
      avatar: getUserInfo(item.user, 'avatar_url') || 'https://i.imgur.com/zPKzLoe.gif'
        }
      )
    )
    
    res.json(formatted)
    
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
    const formatted = [];
    
    searchJSON.data.forEach(item => formatted.push({
      url: item.images.original.url, 
      id: item.id,
      title: formattedTitle(item.title),
      username: getUserInfo(item.user, 'display_name') || 'Anonymous',
      avatar: getUserInfo(item.user, 'avatar_url') || 'https://i.imgur.com/zPKzLoe.gif'
        }
      )
    )

    res.json(formatted);
  } catch(err) {
    console.log(err);
  }
})

module.exports = router;
