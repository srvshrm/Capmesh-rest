const Dao = require('../data-access/data-access');
const dao = new Dao();

class Search {
    /**
     * @description to search people in the database by the name
     * @author Sourav Sharma, Surabhi Kulkarni, Richa Madhupriya
     * @param {string} query
     * @returns {Object} result 
     */

    async searchPeople(query) {
        console.log(query);
        var filter = { $match: { "name": new RegExp(query, 'i') } }
        var project = { $project: { "_id": 0, "userName": 1, "name": 1, "bio": 1 } }
        let result = await dao.aggregate("users", [filter, project]);
        return (result);
    }

    /**
     * @description to search comapnies in the database by the name
     * @author Sourav Sharma, Surabhi Kulkarni, Richa Madhupriya
     * @param {string} query
     * @returns {Object} result 
     */
    async searchCompanies(query) {
        var filter = { $match: { "name": new RegExp(query, 'i') } }
        var project = { $project: { "_id": 0, "companyID": 1, "name": 1, "areaOfWork": 1 } }
        let result = await dao.aggregate("companies", [filter, project]);
        return (result);
    }

}

module.exports = Search
