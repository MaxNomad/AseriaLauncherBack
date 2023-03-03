const ProfileModel = require('../models/profile.model');
const ProfileHelpers = require('../helpers/profile.helper');

exports.GetUserProfile = (req, res) => {
    try {
        Promise.all([ProfileModel.get_user(req.query.name), ProfileModel.get_user_plan(req.query.name)]).then(([userData, userPlanData]) => {
            if (ProfileHelpers.isEmpty(userData[0])) {
                return res.status(404).send({ error_details: { name: "UserNotExist", message: "User does not exist in database.", statusCode: res.statusCode, error: "UserNull", date: Date() } });
            } else {
                res.status(200).send(ProfileHelpers.mergeUserData(userData[0], userPlanData));
            }
        });
    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error", date: Date() } });
    }
};