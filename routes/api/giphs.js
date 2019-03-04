const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/test", (req, res) => res.json({msg: "This is the giphy route"}))

router.get("/trending" , async (req, res) => {
  try {
    const trending = await fetch('https://api.giphy.com/v1/gifs/trending?limit=15', {
      headers: {
        "Content-Type": "application/json",
        "api_key": "cCMV85rqh1Z5dmF52GKxGqFlrcFd87R2",
      }
    })
    const trendingJSON = await trending.json()
    const formatted = [];
    trendingJSON.data.forEach(item => formatted.push({url: item.images.original.url, id: item.id}))
    res.json(formatted)
    // res.json(trendingJSON);
  } catch(err) {
    console.log(err);
  }
})

router.get("/search", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  try {
    const search = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
        "api_key": "cCMV85rqh1Z5dmF52GKxGqFlrcFd87R2",
      }
    })
    const searchJSON = await search.json();
    const formatted = [];
    searchJSON.data.forEach(item => formatted.push({url: item.images.original.url, id: item.id}))
    res.json(formatted);
  } catch(err) {
    console.log(err);
  }
})

module.exports = router;
