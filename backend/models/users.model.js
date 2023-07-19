
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: String,
    email: String,
    password: String,
    lastName: String,


}, {
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel }