const express = require('express')
const session = require('express-session');
const path = require('path');
const router = require('./routes');
require('dotenv').config()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"

const app = express();

app.use(session({
     secret : 'swldcmwñlcmwkdcdcui38654gbdceejmcmwdwdkwk34dn', //random or hash value
     saveUninitialized: true,
    resave: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,  'public')))

app.use(router)

app.listen(PORT, () => console.log(`app listening on http://${HOST}:${PORT} `))