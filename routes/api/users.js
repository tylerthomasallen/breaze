const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.get("/test", (req, res) => res.json({msg: "This is the users route"}))

router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).sjon({ email: "A user has already registered with this address"})
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
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    }
  )
})

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ msg: 'Incorrect email'})
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            res.json({ msg: 'Success' })
          } else {
            return res.status(400).json({ msg: 'Incorrect password'})
          }
        })
    })
})

module.exports = router;
