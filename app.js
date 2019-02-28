const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const giphs = require('./routes/api/giphs');

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err))

app.use("/api/users", users);
app.use("/api/giphs", giphs)
app.get("/", (req, res) => res.send('Hello, Tyler'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port:${port}`))