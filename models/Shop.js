
const mongoose = require('mongoose')

var shopShema = new mongoose.Schema({
  serviceIndex:String,
  serviceType:Array,
  shopList:Array,
},{collection:"shops"});
//如果遍历为空数组，加航collection:"数据库名（数据库就是stutio.3T 中的collection名）"

module.exports = mongoose.model('shop', shopShema);
