const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/users.model");
const UserRouter = express.Router();
const cors = require("cors");
require("dotenv").config();
UserRouter.use(express.json())

UserRouter.use(cors())

UserRouter.post("/register", async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    try {

        if (user) {
            res.status(200).json({ "msg": "User already exist, please login" })
        } else {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.status(200).json({ err: err.message })
                } else {
                    const newUser = new UserModel({ ...req.body, password: hash })
                    await newUser.save()
                    res.status(200).json({ "msg": "User Registered Succesfully", newUser })
                }
            })
        }


    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

UserRouter.post("/login", async (req, res) => {

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    try {
        if (user) {

            bcrypt.compare(password, user.password, async (error, result) => {

                if (error) {
                    res.status(400).json({ error: error.message })
                } else {
                    if (result) {
                        const token = jwt.sign({ userId: user._id, userName: user.name }, process.env.Secret_key, {
                            expiresIn: "7d"
                        });
                        const refreshTtoken = jwt.sign({ userId: user._id, userName: user.name }, process.env.Refresh_secret_key, {
                            expiresIn: "10d"
                        });
                        res.status(200).json({ "msg": "login successfull", data: user, token, refreshTtoken });
                    } else {
                        res.status(200).json({ "msg": "Wrong Credentials !!" })
                    }
                }
            })

        } else {
            res.status(200).json({
                "msg": "Not registered!!"
            })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})


module.exports = {
    UserRouter
}