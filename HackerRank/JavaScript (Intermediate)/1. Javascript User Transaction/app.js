
const request = require("request");

async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>

    let result1 = await getUserData(username);
    const userData = JSON.parse(result1).data;
    if (userData.length !== 0) {
        const userID = userData[0].id;
        let result2 = await getUserId(userID);
        return JSON.parse(result2).total;
    } else {
        return "Username Not Found";
    }
}
function getUserData(username) {
    return new Promise((resolve, reject) => {
        request(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`, function (error, response, body) {
            if (error) reject(error);
            else resolve(body);
        });
    });
}

function getUserId(userID) {
    return new Promise((resolve, reject) => {
        request(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userID}`, function (error, response, body) {
            if (error) reject(error);
            else resolve(body);
        });
    });
}

// let username = "epaga";
let username = "jay";
getNumTransactions(username);
