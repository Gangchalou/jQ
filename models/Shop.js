
const mongoose = require('mongoose')

var shopShema = new mongoose.Schema({
  serviceIndex:String,
  serviceType:Array,
  shopList:Array,
});

module.exports = mongoose.model('shop', shopShema);
