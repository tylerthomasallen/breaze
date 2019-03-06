const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const passport = require('passport');

// validation imports for Signup and Login
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

// User creating a new account / signing up

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'A user has already registered with this address'
        return res.status(400).json(errors)
      } else {
        const { email, password } = req.body;
        const newUser = new User({
          email,
          password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, email: user.email, favorites: user.favorites };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                    ...payload
                  })
                })
              })
              .catch(err => console.log(err));
          })
        })
      }
    }
  )
})

//User logging in

router.post('/login', (req, res) => {

  console.log('hello, user login')

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors = 'Incorrect email'
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, email: user.email, favorites: user.favorites };

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                ...payload
              })
            })
          } else {
            errors = 'Incorrect password'
            return res.status(400).json(errors)
          }
        })
    })
})

router.post('/addfavorite', async (req, res) => {
  
  console.log('hello addfavorite to user')
  
  const { user: { id, email } } = req.body;
  console.log(email);
  const { giph } = req.body;

  User.findByIdAndUpdate(id,
    {$push: {favorites: giph}},
    {safe: true, upsert: true, new: true},
    (err, user) => {
      console.log(user);
      console.log(user.favorites);
      if (err) return res.status(500).json(err);
      return res.json({favorites: user.favorites})
    })
  }
)

router.get('/current', (req, res) => {
  const { email } = req.query;
  console.log(email);
  User.findOne({ email })
  .then(user => {
    if (!user) {
      errors = 'Incorrect email'
      return res.status(404).json(errors);
    }
    const { id, email, favorites } = user;
    console.log('hello')
    res.json({
      id,
      email,
      favorites
    })
  })
})

module.exports = router;
