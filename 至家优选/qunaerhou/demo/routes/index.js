var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "app"
});

connection.connect();
/* GET home page. */
router.get('/', function (req, res, next) {
});
//用户的查询
router.get("/userQuery", function (req, res) {
    var sql = "SELECT    s.UserID, s.Email, s.NickName, s.UserName, s.PassWord, s.Sex, s.Birthday, u.Tel, s.`	LastLogin`, s.LastIp, u.BestTime, u.Addr FROM  Users AS s INNER JOIN UserAddress AS u ON s.AddressID = u.AddressId ";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);

    })

});
//商品查询
router.get("/goodsQuery", function (req, res) {

    console.log("大叔大婶大所多大时代对齐")
    var sql = "SELECT   g.GoodsID,g.isSale, g.GoodsName, c.CatName, b.BrandName, g.GoodsStock, g.ShopPrice, g.Description, g.Thumbnail, g.IsSale, g.CreateTime, g.IsDelete, g.IsBest, g.IsNew, g.IsHot, g.IsPromotion, g.Remark FROM        Goods AS g INNER JOIN Category AS c ON g.CatID = c.CatID INNER JOIN Brand AS b ON g.BrandID = b.BrandID where g.IsShow=1   ";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);

    })

});
//商品分类查询
router.get("/categoryQuery", function (req, res) {
    var sql = "select * from Category ";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);

    })

});
//回收站查询
router.get("/huiQuery", function (req, res) {
    var sql = "SELECT   g.GoodsID,g.isSale, g.GoodsName, c.CatName, b.BrandName, g.GoodsStock, g.ShopPrice, g.Description, g.Thumbnail, g.IsSale, g.CreateTime, g.IsDelete, g.IsBest, g.IsNew, g.IsHot, g.IsPromotion, g.Remark FROM        Goods AS g INNER JOIN Category AS c ON g.CatID = c.CatID INNER JOIN Brand AS b ON g.BrandID = b.BrandID where g.IsShow=0   ";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);

    })

});
//回收站恢复
router.get("/huiUpdate", function (req, res) {
    var id = req.query.index;
    var shu =parseInt(id);

    var sql = "UPDATE goods SET IsShow = 1 WHERE GoodsID = ?";
    connection.query(sql, [shu], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
       // res.json(result);
        console.log(result);
        res.send("true");

    })

});
//商品删除 进入回收站
router.get("/goodsUpdate", function (req, res) {
    var id = req.query.index;
    var shu =parseInt(id);

    var sql = "UPDATE goods SET IsShow = 0 WHERE GoodsID = ?";
    connection.query(sql, [shu], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
       // res.json(result);
        console.log(result);
        res.send("true");

    })

});
//增加商品分类
router.get('/addCategory', function (req, res) {
    var CatName = req.query.CatName;
    var Keywords = req.query.Keywords;
    var Description = req.query.Description;
    var IsShow = req.query.IsShow;
    var shi = 0;
    if(IsShow=="是"){
        shi=1;
    }

    var sql = "insert into category VALUES(0,?,?,?,?)";
    var params = [CatName + "", Keywords + "", Description + "", shi];


    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error.toString());
            return;
        }
        console.log(result);
        res.send("true");
    })


});
//品牌的查询
router.get("/brandQuery", function (req, res) {
    var sql = "select * from brand";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);
    })
});
//品牌的增加
router.get('/brandAdd', function (req, res) {
    var BrandName = req.query.BrandName;
    var BrandLogo = req.query.BrandLogo;
    var Url = req.query.Url;
    var IsShow = req.query.IsShow;
    var shi = 0;
    if (IsShow == "是") {
        shi = 1;
    }
    var sql = "insert into brand VALUES(0,?,?,?,?)";
    var params = [BrandName + "", BrandLogo + "", Url + "", shi];


    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error.toString());
            return;
        }
        console.log(result);
        res.send("true");
    })
});
//管理员的查询
router.get("/adminsQuery", function (req, res) {
    var sql = "select * from admins";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }
        //数组
        res.json(result);
        console.log(result);

    })
});
//管理员的增加
router.get('/adminsAdd', function (req, res) {
    var AdminName = req.query.AdminName;
    var Email = req.query.Email;
    var Password = req.query.Password;
    var CreateTime = req.query.CreateTime;
    var LastLoginTime = req.query.LastLoginTime;
    var sql = "insert into admins VALUES(0,?,?,?,?,?)";
    var params = [AdminName + "", Email + "", Password + "", CreateTime + "", LastLoginTime + ""];
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error.toString());
            return;
        }
        console.log(result);
        res.send("true");
    })
});
//订单查询
router.get("/orderQuery", function (req, res) {
    var sql = "SELECT `order`.OrderID,`order`.OrderSN, `order`.CreateTime, users.NickName,`order`.Payment   FROM users , `order` WHERE users.UserID = `order`.UserID ; ";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);

    })

});
//订单详情查询
router.get("/orderCQuery", function (req, res) {
    var sql = "SELECT users.NickName, `order`.OrderStatus, `order`.PayStatus, `order`.PayTime, `order`.OrderMsg, `order`.ShippingMoney, payment.PayName, `order`.ShippingStatus, `order`.CreateTime, `order`.ConfirmTime, `order`.Payment FROM users , `order` , payment WHERE payment.PayID = 1 ;";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }

        //数组
        res.json(result);
        console.log(result);

    })

});
//配送方式查询
router.get("/Shippingquery", function (req, res) {
    var sql = "SELECT * FROM shipping";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }
        //数组
        res.json(result);
        console.log(result);
    })

});
//配送方式增加
router.get("/Shippingadd", function (req, res) {

    var ShippingName = req.query.ShippingName;
    var Description = req.query.Description;
    var Enabled = req.query.Enabled;
    var shi=0;
    if(Enabled=="是"){
        shi=1;
    }
    var sql = "insert into shipping VALUES(0,?,?,?)";
    var params = [ShippingName + "", Description + "", shi];
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error.toString());
            return;
        }
        console.log(result);
        res.send("true");
    })
});
//支付方式查询
router.get("/Paymentquery", function (req, res) {
    var sql = "SELECT * FROM payment";
    connection.query(sql, [], function (err, result) {
        if (err) {
            console.log(err.toString());
            return;
        }
        //数组
        res.json(result);
        console.log(result);
    })

});
//支付方式增加
router.get("/Paymentadd", function (req, res) {

    var PayName = req.query.PayName;
    var Description = req.query.Description;
    var Enabled = req.query.Enabled;
    var shi=0;
    if(Enabled=="是"){
        shi=1;
    }
    var sql = "insert into payment VALUES(0,?,?,?)";
    var params = [PayName + "", shi, Description + ""];
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error.toString());
            return;
        }
        console.log(result);
        res.send("true");
    })
});
//商品的添加
router.get("/Goodsadd", function (req, res) {
    console.log("进入进入进入进入进入进入进入进入进入进入进入进入进入进入进入进入");
    var GoodsName = req.query.GoodsName;
    var CatID = req.query.CatID;
    var BrandID = req.query.BrandID;
    //'商品库存数量',
    var GoodsStock = req.query.GoodsStock;
    //本店售价',
    var ShopPrice = req.query.ShopPrice;
    //商品的详细描述',
    var Description = req.query.Description;
    //商品在前台显示的微缩图片',
    var Thumbnail = req.query.Thumbnail;
    //该商品是否开放销售，0，否'1，是；,
    var IsSale = req.query.IsSale;
    //商品添加时间',
    var CreateTime = req.query.CreateTime;
    //商品是否已经删除，0，否；1，已删除',
    var IsDelete = req.query.IsDelete;
    //是否是精品；0，否；1，是',
    var IsBest = req.query.IsBest;
    //是否是新品；0，否；1，是'
    var IsNew = req.query.IsNew;
    //'是否热销，0，否；1，是',
    var IsHot = req.query.IsHot;
    //是否特价促销；0，否；1，是',
    var IsPromotion = req.query.IsPromotion;
    //备注
    var Remark = req.query.Remark;

    var IsShow = req.query.IsShow;
    var DaTu1 = req.query.DaTu1;
    var DaTu2 = req.query.DaTu2;
    var DaTu3 = req.query.DaTu3;
    var XiaoTu1 = req.query.XiaoTu1;
    var XiaoTu2 = req.query.XiaoTu2;
    var XiaoTu3 = req.query.XiaoTu3;


    var Sale=0;
    var Best=0;
    var New=0;
    var Hot=0;
    var Promotion=0;
    var dele=0;
    if(IsHot=="是"){Hot=1;}
    if(IsNew=="是"){New=1;}
    if(IsBest=="是"){Best=1;}
    if(Thumbnail=="是"){Thumbnail=1;}
    if(IsPromotion=="是"){Promotion=1;}
    if(CreateTime=="已删除"){dele=1;}
    var sql = "insert into goods VALUES( 0,?,?,NULL,?,?,?,?,?,?,?,NULL,?,?,?,?,?,?,?,NULL,NULL,?,?,?,?,?,?)";
    var params = [CatID,GoodsName+"",BrandID,GoodsStock+"",ShopPrice
        ,Description+"",Thumbnail+"",IsSale,CreateTime+"",dele,IsBest
        ,IsNew,IsHot,IsPromotion,Remark+"",IsShow,DaTu1+"",
        DaTu2+"",DaTu3+"",XiaoTu1+"",XiaoTu2+"",XiaoTu3+""];
    connection.query(sql, params, function (error, result) {
        if (error) {
            console.log(error.toString());
            return;
        }
        console.log(result);
        res.send("true");
    })
});
module.exports = router;
