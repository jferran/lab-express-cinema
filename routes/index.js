const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', async (req, res, next) => {
    try{
        const response = await MovieModel.find().select('title image')
        res.render('movies', {
            movies: response
        })
    }
    catch(err){
        console.log(err)
    }
})
router.get('/movie/:id', async (req, res, next) =>{
    const { id } = req.params
    console.log("searching", id)
    try{
        const response = await MovieModel.findById(id)
        res.render("movie", {
            movie: response
        })

    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;
