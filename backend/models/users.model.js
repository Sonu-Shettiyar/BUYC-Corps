
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String

}, {
    versionKey:false
})

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel }