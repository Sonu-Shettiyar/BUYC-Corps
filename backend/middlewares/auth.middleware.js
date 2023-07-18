const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.Secret_key)
        if (token) {
            req.body.userID = decoded.userID;
            req.body.userName = decoded.userName;
            req.body.dealerId = decoded.userID;
            req.body.dealerName = decoded.userName;
            next();
        } else {
            res.status(200).json({ "msg": "You are not authorized" })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
module.exports = {
    auth
}