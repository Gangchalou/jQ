
require('../tools/db')
const ShopModel = require('../models/Shop')
const ServicesModel = require('../models/Services')
const CommentModel = require('../models/Comment')

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

app.get('/getComment?page' + page ,function (req,res) {
  var page = req.query.page
  req.param()
  CommentModel.find({}).limit(10).skip((page-1)*10).exec(function (err, data) {
    if(!err){
      res.send({comments:data})
    }
  });
})