
require('../tools/db')
const ShopModel = require('../models/Shop')
const ServicesModel = require('../models/Services')

ServicesModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
});

ShopModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
});
