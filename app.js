let express = require("express");
let app = express();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 2008
const mongoUrl = "mongodb+srv://mustaeen:plastion@realmcluster.ecbjk.mongodb.net/bnews?retryWrites=true&w=majority"
// const mongoUrl = process.env.mongoUrl
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
    res.send("Welcome to b's news api")
})

// hero section
app.get('/hero_section',(req,res) => {
    if(req.query){
        db.collection('hero_section').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// recent news
app.get('/recent_news',(req,res) => {
    if(req.query){
        db.collection('recent_news').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// recent news by id
app.get('/recent_news/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('recent_news').find({id:newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    
})

// top_stories 
app.get('/top_stories',(req,res) => {
    if(req.query){
        db.collection('top_stories').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// top_stories_2 
app.get('/top_stories_2',(req,res) => {
    if(req.query){
        db.collection('top_stories_2').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// top_stories_2 by id 
app.get('/top_stories_2/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('top_stories_2').find({id:newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    
})


// trending_news
app.get('/trending_news',(req,res) => {
    if(req.query){
        db.collection('trending_news').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// trending_news by id
app.get('/trending_news/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('trending_news').find({id:newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
})

// business
app.get('/business',(req,res) => {
    if(req.query){
        db.collection('business').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// business by id
app.get('/business/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('business').find({id:newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    
})

// lifestyle
app.get('/lifestyle',(req,res) => {
    if(req.query){
        db.collection('lifestyle').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// lifestyle by id
app.get('/lifestyle/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('lifestyle').find({id:newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    
})

// Technology
app.get('/technology',(req,res) => {
    if(req.query){
        db.collection('Technology').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// Technology by id
app.get('/technology/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('Technology').find({id:newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    
})

// sports
app.get('/sports',(req,res) => {
    if(req.query){
        db.collection('sports').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }
})

// sports by id
app.get('/sports/:id',(req,res) => {
    let newsId = Number(req.params.id)
        db.collection('sports').find({id: newsId}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    
})


// connection to db
MongoClient.connect(mongoUrl, (err, client) => {
    if(err) console.log(`Error while connecting`)
    db = client.db('bnews')
    app.listen(port, () => {
        console.log(`Server is running on ${port}`)
    })
})

