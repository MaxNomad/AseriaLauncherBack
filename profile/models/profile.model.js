const db = require('../../common/services/mysql.service').pool
const axios = require('axios');
exports.get_user = (user) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE name = ? LIMIT 1;", user, (err, res) => {
            err ? reject(err) : resolve(res)
        })

    })
}

exports.get_user_plan = (user) => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.planApi + "/player?player=" + user)
            .then(({ data }) => {
                resolve(data);
            })
            .catch((err) => {
            //console.log(err.response)
                
                    resolve(null);
                    reject(err)
                
            });

    });

}


