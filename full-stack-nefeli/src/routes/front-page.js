const express = require('express');
const router = express.Router();

//data we need from the db

//username to all pages
const username="vasilis";

//data we need on the / page
const trendingPosts = {num1:{name:"vasilis1", category:"Category1", context:"The paragraph must be 65 characters and 3... in the end", numOfLikes:10, numOfComm:2},
                        num2:{name:"vasilis2", category:"Category2", context:"this is a test.", numOfLikes:10, numOfComm:2},
                        num3:{name:"vasilis3", category:"Category3", context:"this is a test.", numOfLikes:10, numOfComm:2},
};

const topPosts = {num1:{name:"vasilis1", category:"Category1", context:"this is a test.", numOfLikes:10, numOfComm:2},
                    num2:{name:"vasilis2", category:"Category2", context:"this is a test.", numOfLikes:10, numOfComm:2},
                    num3:{name:"vasilis3", category:"Category3", context:"this is a test.", numOfLikes:10, numOfComm:2},
                    };

const topCategories = {num1:{name:"Category1", numOfPosts:32},num2:{name:"Category2", numOfPosts:32},num3:{name:"Category3", numOfPosts:32},
                        num4:{name:"Category4", numOfPosts:32},
                        num5:{name:"Category5", numOfPosts:32}};

//data we need  to the /categories page
const CategoriesBox = {num1:{name:"Category1",CreatedBy:"vasilis10", numOfPosts:32, numOfSubs:10},
                        num2:{name:"Category2",CreatedBy:"vasilis11", numOfPosts:32, numOfSubs:10},
                        num3:{name:"Category3",CreatedBy:"vasilis12", numOfPosts:32, numOfSubs:10},
                        num4:{name:"Category4",CreatedBy:"vasilis13", numOfPosts:32, numOfSubs:10},
                        num5:{name:"Category5",CreatedBy:"vasilis14", numOfPosts:32, numOfSubs:10}};

//data we need on the /posts page
const AllPosts= {num1:{name:"vasilis1", context:"this is a test.", numOfLikes:10, numOfComm:2},
                num2:{name:"vasilis2", context:"this is a test.", numOfLikes:10, numOfComm:2},
                num3:{name:"vasilis3", context:"this is a test.", numOfLikes:10, numOfComm:2},
                };

const CategoryInfo = {name:'Categoryname', NumOfPosts:10, CreatedBy:'vasilis1', NumOfSubs:10, Context:'This is a test paragraph.'};

const AllAnswers ={num1:{name:"vasilis1", context:"this is a test.", numOfLikes:10},
                    num2:{name:"vasilis2", context:"this is a test.", numOfLikes:10},
                    num3:{name:"vasilis3", context:"this is a test.", numOfLikes:10},
                    };

const post = {name:"vasilis", context:"this is a test.", numOfLikes:10, numOfComm:2};

//profile info
const profileInfo = {username:username, email:"saratsisbasilis@gmail.com", date:"3/6/2021", numPosts:32, numSubs:11, numLikes:11};

//routes for GET REQUEST
router.get('/', async(request, response) => {
    response.render('main',{layout: 'index', username:username, trendingPosts:trendingPosts, topPosts:topPosts, topCategories:topCategories});
})

router.get('/categories',async(request, response) => {
    response.render('main', {layout: 'categories', username:username, CategoriesBox:CategoriesBox});
})

router.get('/posts:CategoryID',async(request, response) => {
    response.render('main', {layout: 'posts', username:username, CategoryName:request.params.CategoryID.slice(1), AllPosts:AllPosts, CategoryInfo:CategoryInfo});
})

router.get('/comment:CategoryId',async(request, response) => {
    response.render('main', {layout: 'comments', username:username, CategoryName:request.params.CategoryId.slice(1), CategoryInfo:CategoryInfo, post:post, AllAnswers:AllAnswers});
})

router.get('/profile',async(request, response) => {
    response.render('main', {layout: 'profile', username:username, profileInfo:profileInfo});
})

router.get('/profile:username',async(request, response) => {
    //profile:user info
    const profileOthersInfo = {name:request.params.username.slice(1), email:"saratsisbasilis@gmail.com", date:"3/6/2021", numPosts:32, numSubs:11, numLikes:11};
    response.render('main', {layout: 'profileToOthers', username:username, profileOthersInfo:profileOthersInfo});
})

router.get('/contact-us',async(request, response) => {
    response.render('main', {layout: 'contact-us', username:username});
})

router.get('/log-in',async(request, response) => {
    response.render('main', {layout: 'login', username:username});
})

//routes for POST REQUESTS


module.exports = router;