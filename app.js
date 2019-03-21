const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const giphs = require('./routes/api/giphs');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://tallen:4Ronnoc@cluster0-oyywn.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// await client.connect(async res => await console.log('connected'))

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/giphs", giphs)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port:${port}`))
