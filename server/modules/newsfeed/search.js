const Dao = require('../data-access/data-access');
const dao = new Dao();

class Search
{
    /**
 * @description to search people in the database by the name
 * @author Sourav Sharma, Surabhi Kulkarni, Richa Madhupriya
 * @param {string} userName
 * @returns {Object} result 
 */

 async searchPeople( userName) {
        var filter = {"userName":  userName }
        let result = await dao.find("users", filter);
        return (result);
    }

}

module.exports = Search
