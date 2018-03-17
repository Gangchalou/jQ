
const mongoose = require('mongoose')

var itemShema = new mongoose.Schema({
  id:String,
  title:String,
  name:String,
  desc:String,
  price:Number,
  oldPrice:Number,
  orderCount:Number,
  commentCount:Number,
  soldCount:Number,
  accept:String,
  praise:String,
  company:String,
  imgUrl:String
},{collection:"item"});

module.exports = mongoose.model('item', itemShema);
/*云家政*/