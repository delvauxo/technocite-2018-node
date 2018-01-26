const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')
const bodyParser = require('body-parser')
const helpers = require(`${process.cwd()}/helpers`)
const expressValidator = require('express-validator')

//view engine setup
app.engine('hbs',hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}))

app.set('view engine','hbs')
app.set('views',`${__dirname}/views`)

// Initialise le systeme d'helpers pour hbs
// -- Permet d'utiliser des "fonctions" dans les fichiers .hbs
helpers.registerHelpers(hbs)

// setup static folder for static rendering on my server side
app.use(express.static(`${__dirname}/public`))

// setup express to manage the raw requests and turn them into usable properties of req.body
// permet de gérer le body du POST (la requete)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use('/',routes)


module.exports = app

