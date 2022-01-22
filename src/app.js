const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { rmSync } = require('fs')

const pathToPublic = path.join(__dirname, "../public")
const pathToViews = path.join(__dirname, "../templates/views")
const pathToPartials = path.join(__dirname, "../templates/partials")

const port = process.env.PORT || 3000
const app = express()
app.set("view engine", "hbs")
app.set("views", pathToViews)
hbs.registerPartials(pathToPartials)

app.use(express.static(pathToPublic))

//setup few routes
//about page 
//help page
//set up error handling

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('404', {
        msg: "Yet to come..."
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        msg: "404 Page not found!"
    })
})

app.listen(port, () => {
    console.log("server is up and running")
})

