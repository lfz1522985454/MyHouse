var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 3306,
  database: "app"
});
connection.connect();//数据库连接配置
//搜索结果
router.get("/selectByName", function (req, res) {
  console.log("进入搜索");
  var sql = "select * from goods where GoodsName like '%" + req.query.name + "%'";
  console.log(sql);
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result);

  })

});
//IndexSelectDlzt
//【首页】默认查询登录状态
router.get("/IndexSelectDlzt", function (req, res) {
  console.log("【进入查询登录状态】")
  var sql = "SELECT users.UserID,dlzt.Dlzt FROM users INNER JOIN dlzt ON dlzt.userId = users.UserID where dlzt.Dlzt=1";
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }

    if (result.length == 0) {
      res.send("0");
      return
    }
    res.json(result);


  })

});
//【首页】默认查询所有【新】商品
router.get("/IndexSelectIsNew", function (req, res) {
  console.log("【首页】默认查询所有【新】商品")
  var sql = "select * from goods where isNew=1 and isShow=1";
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }

    res.json(result);
    console.log(result);

  })

});
//【首页】默认查询所有【精品】商品
router.get("/IndexSelectIsBest", function (req, res) {

  var sql = "select * from goods where isBest=1";
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result);

  })

});
//【发现】页面查询全部
router.get('/FindSelectAll', function (req, res, next) {
  let json = [
    {"imgUrl": "http://f10.baidu.com/it/u=1849087744,4069932492&fm=72", "dataTime": "2017/01/22"},
    {"imgUrl": "http://img1.imgtn.bdimg.com/it/u=1134677771,1242403796&fm=27&gp=0.jpg", "dataTime": "2017/01/20"},
    {"imgUrl": "http://img3.imgtn.bdimg.com/it/u=995035083,1159167522&fm=27&gp=0.jpg", "dataTime": "2017/01/18"},
    {"imgUrl": "http://img0.imgtn.bdimg.com/it/u=4000617728,2128684346&fm=27&gp=0.jpg", "dataTime": "2016/12/16"},
    {"imgUrl": "http://img2.imgtn.bdimg.com/it/u=498499925,926578257&fm=27&gp=0.jpg", "dataTime": "2016/09/02"}
  ]
  res.send(json);
});
//【商品详情页面】 查询
router.get("/DescSelectById", function (req, res, next) {
  var goodsid = req.query.goodsId;


  console.log("【商品详情页面】 查询ID:" + goodsid);
  var sql = "select * from goods where GoodsId=?";


  connection.query(sql, [goodsid], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }

    res.json(result);
    console.log(result);

  })

});
//【创建订单】 查询
router.get("/ChuangJianSelectById", function (req, res, next) {
  var goodsid = req.query.goodsId;
  console.log("【创建订单】 查询ID:" + goodsid);
  var sql = "select * from goods where GoodsId=?";
  connection.query(sql, [goodsid], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }

    res.json(result);
    console.log(result);

  })

});
//【提交订单信息】 增加
router.get("/addOrder", function (req, res, next) {
  var goodsid = req.query.goodsId;
  var uId = req.query.uId;
  console.log("//【提交订单信息】 增加" + goodsid);
  var sql = "INSERT INTO `order`(orderSn,UserID,OrderMsg,PayID,Payment,GoodsID‎⁫) VALUES(\"SN11111\"," + uId + ",\"留言\",1,1231.2," + goodsid + ")";
  connection.query(sql, [goodsid], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }

    res.json(result);
    console.log(result);

  })

});
//【购物车】查询全部
router.get("/GouSelectAll", function (req, res) {
  var sql = "SELECT c.CartID,c.GoodsID,goods.GoodsName,goods.Thumbnail,goods.ShopPrice,c.GoodsPrice,c.GoodsNumber FROM cart AS c ,goods";
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result);

  })

});
//【订单查询】 查询
router.get("/selectAllDin", function (req, res) {
  console.log("【订单查询】 查询")
  let uId01 = req.query.uId;
  var sql = "SELECT`order`.OrderID,`order`.OrderSN,`order`.UserID,goods.GoodsName,goods.XiaoTu1,`order`.OrderMsg,`order`.PayID,`order`.Payment,`order`.CreateTime FROM goods INNER JOIN `order` ON `order`.`GoodsID‎⁫` = goods.GoodsID where order.UserID=" + uId01;
  console.log(sql + "" + "uId::::" + uId01);
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result);

  })

});
router.get("/selectUser", function (req, res) {
  console.log("【查询信息】 查询")
  var Uid = req.query.uId;
  var sql = "select * from users where UserID=" + Uid;
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result + "信息");

  })

});
//【查询行数】查询
router.get("/selectCount", function (req, res) {
  console.log("【查询行数】 查询")
  var Uid = req.query.uId;
  var sql = "select count(*) as count from `order` where UserID=" + Uid;
  console.log("【查询行数】 查询" + sql)
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result.count);

  })

});
//【登录】
router.get("/selectDl", function (req, res) {
  console.log("【登录】")

  var UserName = req.query.UserName;
  var Password = req.query.Password;
  var sql = "select count(*) as count,UserId,UserName,NickName,Sex,RegisterTime from users where UserName='" + UserName + "' and `Password` ='" + Password + "'";
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    var id = result[0].UserId;
    if (result[0].count == 1) {
      //登录成功 修改登录状态
      var sql1 = "UPDATE dlzt SET dlzt=1 where userId=" + id;
      connection.query(sql1, [], function (err, result) {
        if (err) {
          console.log(err.toString());
          return;
        }

        console.log("登录成功 修改登录状态成功")

      });


    }


    console.log("登录：" + result[0].count);

  })

});
//tuichuDl
router.get("/tuichuDl", function (req, res) {
  console.log("【退出登录】")

  var uId = req.query.uId;

  var sql = "UPDATE dlzt SET dlzt=0 where userId=" + uId;
  connection.query(sql, [], function (err, result) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
    console.log(result);


  })

});
module.exports = router;
