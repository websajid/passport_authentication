const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/enduser");

const userSchema =  mongoose.Schema({
  username:String,
  passport:String,
  secret:String
});
userSchema.plugin(plm);
module.exports =  mongoose.model("loginuser",userSchema);