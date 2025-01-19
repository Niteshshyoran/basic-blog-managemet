const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    title : {type : String, require: true},
    content: String,
    author: {type : String, require: true}
})

const models = mongoose.model("user", UserSchema);

module.exports = {models}