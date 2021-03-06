const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')

// view engine setup
app.engine('hbs', hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layout/main.hbs`
}))

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))
app.use('/', routes)

module.exports = app
