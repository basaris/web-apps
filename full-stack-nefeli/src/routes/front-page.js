const express = require('express');
const router = express.Router();

router.get('/', async(request, response) => {
    response.render('front-page');
})

router.get('/categories',async(request, response) => {
    response.render('categories');
})

router.get('/posts',async(request, response) => {
    response.render('front-page');
})

router.get('/comment',async(request, response) => {
    response.render('front-page');
})

router.get('/profile',async(request, response) => {
    response.render('front-page');
})

module.exports = router;