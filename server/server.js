/*
    @author: Sourav Sharma, Surbhi Kulkarni, Richa Madhupriya
 */

const express = require('express');
const app = express();

const Posts = require('./modules/newsfeed/posts');
const post = new Posts();

var parser = require('body-parser');

app.use(parser.json());

//to insert post in database by a user
app.patch('/rest/api/users/createPosts/update/', async (req, res) => {
    let result;
    try {
        result = await post.createPosts(req.body);
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
});

//to edit post inserted in the database by the user
app.patch('/rest/api/users/editPosts/update/', async (req, res) => {
    let result
    try {
        result = await post.editPosts(req.body);
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
})

//to delete post inserted in the database by the user
app.patch('/rest/api/users/deletePosts/update/', async (req, res) => {
    let result
    try {
        result = await post.deletePosts();
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
})


app.listen('8080', () => console.log('Listening on port 8080'))