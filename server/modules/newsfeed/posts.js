/*
    @author: Sourav Sharma, Surbhi Kulkarni, Richa Madhupriya
 */

const Dao = require('../data-access/data-access');
const dao = new Dao();

const uuidv4 = require('uuid/v4');


class Posts {

//to insert post in database by a user
    async createPosts(data){
        data.postid = uuidv4();
        var filter = { "userId": 1005 };
        var content = { $push: { "posts": data } };
        var result = await dao.update("test",filter,content)
        return result
    }

//to edit post inserted in the database by the user
    async editPosts(data){
        var filter = { "posts.postid": 1 };
        var content = { $set: { "posts.$.content": data.content } };
        var result = await dao.update("test",filter,content)
        return result
    }

//to delete post inserted in the database by the user
     async deletePosts(){
        var filter = { "userId": 1005 };
        var content = { $pull: { "posts": {postid:1} } };
        var result = await dao.update("test",filter,content)
        return result
    }
}

module.exports = Posts