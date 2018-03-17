
const mongoose = require('mongoose')

var commentShema = new mongoose.Schema({
  iconUrl:String,
  area:String,
  city:String,
  comment:String,
  createtime:Number,
  nick:String,
  star:Number
},{collection:"comment"});

module.exports = mongoose.model('comment', commentShema);
/*云家政*/