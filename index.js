require("./tools/db")

var express = require("express");

var app = express();
const shops = require('./models/Shop');
const servers = require('./models/Services');
const item = require('./models/Item')
const comment = require('./models/Comment')

app.use(express.static("public"))

//如果页面不打开，就没有发送数据请求。若想看到数据，可在此处调用即可
shops.find({},function (err,data) {
  console.log(data);
});

servers.find({},function (err,data) {
  console.log(data);
})

//主页面
app.get('/getShopList',function (req, res) {
 shops.find({},function (err, data) {
    // 出错
    if(err){
      res.send({status:'error'})

    }else{
      res.send({list: data});
      console.log(data)
    }
  })
});

//服务列表
app.get('/getServerList',function (req, res) {
  servers.find({},function (err, data) {
    // 出错
    if(err){
      res.send({status:'error'})

    }else{
      res.send({list: data});
      console.log(data)
    }
  })
})

// 服务项
app.get('/getItemList',function (req, res) {
  item.find({},function (err, data) {
    // 出错
    if(err){
      res.send({status:'error'})

    }else{
      res.send({list: data});
      console.log(data)
    }
  })
})

//评论列表
app.get('/getCommentList',function (req, res) {
  comment.find({},function (err, data) {
    // 出错
    if(err){
      res.send({status:'error'})

    }else{
      res.send({list: data});
      console.log(data)
    }
  })
})


//监听3000端口，并启动服务器
app.listen(3005)

