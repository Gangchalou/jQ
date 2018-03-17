
const mongoose = require('mongoose')

var servicesShema = new mongoose.Schema({
  id:String,
  title:String,
  orderCount:Number,
  positiveRate:String,
  imgUrl:String
},{collection:"service"});
//如果遍历为空数组，加航collection:"数据库名（数据库就是stutio.3T 中的collection名）"

module.exports = mongoose.model('services', servicesShema);
