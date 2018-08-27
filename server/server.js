/**
* @author: Sourav Sharma, Surabhi Kulkarni, Richa Madhupriya
*/

const express = require('express');
const app = express();

const Posts = require('./modules/newsfeed/posts');
const post = new Posts();

const Search = require('./modules/newsfeed/search');
const search = new Search();

var parser = require('body-parser');

app.use(parser.json());

/**
 * @description to insert post in database by a user
*/
app.patch('/rest/api/users/createPosts/update/:userName', async (req, res) => {
    let result;
    let userName = req.params.userName;
    try {
        result = await post.createPosts(req.body,userName);
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
});

/**
 * @description to edit post inserted in the database by the user
 */
app.patch('/rest/api/users/editPosts/update/:userName/:postId', async (req, res) => {
    let result;
    let userName = req.params.userName;
    let postId = req.params.postId;
    try {
        result = await post.editPosts(req.body,userName,postId);
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
})

/**
 * @description to delete post inserted in the database by the user
 */
app.patch('/rest/api/users/deletePosts/update/:userName/:postId', async (req, res) => {
    let result
    let userName = req.params.userName;
    let postId = req.params.postId;
    try {
        result = await post.deletePosts(userName,postId);
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
})

/**
 * @description to search people in the database by the user
 */
app.patch('/rest/api/users/searchPeople/:userName', async (req, res) => {
    let result;
    let userName = req.params.userName;
    try {
        result = await search.searchPeople(userName);
    }
    catch (err) {
        result = { err: err }
    }
    res.send(result)
})

app.listen('8080', () => console.log('Listening on port 8080'))
