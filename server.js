const express = require('express')
const nunjucks = require('nunjucks')
const movies = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("pages", {
    express:server
})

server.get("/", function(req, res){
    return res.render('index', {items: movies})
})

server.listen(5000, function(){
    console.log("Sv is running")
})