/*
Navicat MySQL Data Transfer

Source Server         : tcmp058
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : app

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2018-01-04 15:58:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `AdminID` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '管理员代码',
  `AdminName` varchar(50) NOT NULL COMMENT '管理员登录名',
  `Email` varchar(50) NOT NULL COMMENT '管理员邮箱',
  `Password` varchar(32) NOT NULL COMMENT '管理员登录密码(32位MD5加密)',
  `CreateTime` datetime NOT NULL COMMENT '管理员创建时间',
  `LastLoginTime` datetime NOT NULL COMMENT '管理员最后一次登录时间',
  PRIMARY KEY (`AdminID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admins
-- ----------------------------

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `ArticleID` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章编号',
  `CategoryID` smallint(2) NOT NULL COMMENT '文章分类编号',
  `Title` varchar(150) NOT NULL COMMENT '文章题目',
  `Contents` varchar(255) NOT NULL COMMENT '文章内容',
  `Author` varchar(30) NOT NULL COMMENT '文章作者',
  `AuthorEmail` varchar(60) NOT NULL COMMENT '文章作者的Email',
  `IsShow` tinyint(4) NOT NULL COMMENT '是否显示(1 显示;0不显示)',
  `CreateTime` datetime NOT NULL COMMENT '管理员创建时间',
  `Description` varchar(255) DEFAULT NULL COMMENT '文章的描述',
  PRIMARY KEY (`ArticleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for articlecategory
-- ----------------------------
DROP TABLE IF EXISTS `articlecategory`;
CREATE TABLE `articlecategory` (
  `ACID` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '文章分类编号',
  `ACName` varchar(255) NOT NULL COMMENT '分类名称',
  `	ACType` tinyint(4) NOT NULL COMMENT '分类类型 1,普通分类2,系统分类 3,网店信息 4, 帮助分类 5,网店帮助',
  `Description` varchar(255) DEFAULT NULL COMMENT '分类的说明',
  PRIMARY KEY (`ACID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of articlecategory
-- ----------------------------

-- ----------------------------
-- Table structure for attribute
-- ----------------------------
DROP TABLE IF EXISTS `attribute`;
CREATE TABLE `attribute` (
  `AttrID` int(11) NOT NULL AUTO_INCREMENT COMMENT '分类属性自增id',
  `GoodsTypeID` int(11) NOT NULL COMMENT '分类编号',
  `AttrName` varchar(60) NOT NULL COMMENT '属性名称',
  PRIMARY KEY (`AttrID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attribute
-- ----------------------------

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `BrandID` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '自增id号,品牌编号',
  `BrandName` varchar(60) NOT NULL,
  `BrandLogo` varchar(80) DEFAULT NULL COMMENT '上传的该公司Logo图片',
  `	Url` varchar(255) DEFAULT NULL COMMENT '品牌的网址',
  `IsShow` tinyint(4) DEFAULT NULL COMMENT '该品牌是否显示;0否1显示',
  PRIMARY KEY (`BrandID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `CartID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL COMMENT '用户登录ID;取自session',
  `GoodsID` int(11) NOT NULL COMMENT '商品的ID,取自表goods的goods_id',
  `GoodsPrice` decimal(10,2) NOT NULL COMMENT '商品的本店价,取自表goods的shop_price',
  `GoodsNumber` smallint(6) NOT NULL COMMENT '商品的购买数量,在购物车时,实际库存不减少',
  PRIMARY KEY (`CartID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('1', '1', '4', '9580.00', '1');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `CatID` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '分类编号',
  `CatName` varchar(90) NOT NULL COMMENT '分类名称',
  `Keywords` varchar(255) NOT NULL COMMENT '分类的关键字',
  `Description` varchar(255) DEFAULT NULL COMMENT '分类的说明',
  `IsShow` tinyint(4) NOT NULL COMMENT '是否在前台页面显示 1显示; 0不显示',
  PRIMARY KEY (`CatID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '11', '1', null, '1');
INSERT INTO `category` VALUES ('2', '2', '2', '2', '1');
INSERT INTO `category` VALUES ('3', '3', '3', '3', '1');
INSERT INTO `category` VALUES ('4', '4', '4', '4', '1');
INSERT INTO `category` VALUES ('5', '4', '4', '4', '1');

-- ----------------------------
-- Table structure for collectiongoods
-- ----------------------------
DROP TABLE IF EXISTS `collectiongoods`;
CREATE TABLE `collectiongoods` (
  `CID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL COMMENT '该条收藏记录的会员id，取值于users的user_id',
  `GoodsID` int(11) NOT NULL COMMENT '收藏的商品id，取值于goods的goods_id',
  `CreateTime` datetime NOT NULL COMMENT '收藏时间',
  `	IsAttention` tinyint(4) NOT NULL COMMENT '是否关注该收藏商品;1是;0否',
  PRIMARY KEY (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collectiongoods
-- ----------------------------

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `ComID` int(11) NOT NULL AUTO_INCREMENT COMMENT '	用户评论的自增id',
  `ComType` tinyint(4) NOT NULL COMMENT '用户评论的类型;0评论的是商品,1评论的是文章',
  `IDValue` int(11) NOT NULL COMMENT '文章或者商品的id,文章对应的是article的article_id;商品对应的是goods的goods_id',
  `UserID` int(11) NOT NULL COMMENT '发表该评论的用户的用户id,取值user的user_id',
  `UserName` varchar(60) NOT NULL COMMENT '评论该文章或商品的人的名称,取值users的user_name',
  `Contents` varchar(255) NOT NULL COMMENT '评论的内容',
  `CreateTime` datetime NOT NULL COMMENT '评论创建时间',
  `ComIP` varchar(15) NOT NULL COMMENT '评论时的用户IP',
  `IsShow` tinyint(4) NOT NULL COMMENT '是否被管理员批准显示;1是;0未批准显示',
  `ParentID` int(11) NOT NULL COMMENT '评论的父节点,取值该表的comment_id字段,如果该字段为0,则是一个普通评论,否则该条评论就是该字段的值所对应的评论的回复',
  `ComRank` tinyint(4) NOT NULL COMMENT '该文章或者商品的重星级;只有1到5星;由数字代替;其中5代表5星',
  PRIMARY KEY (`ComID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for dlzt
-- ----------------------------
DROP TABLE IF EXISTS `dlzt`;
CREATE TABLE `dlzt` (
  `DlId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `Dlzt` int(1) DEFAULT NULL,
  PRIMARY KEY (`DlId`),
  KEY `dlzt_ibfk_1` (`userId`),
  CONSTRAINT `dlzt_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of dlzt
-- ----------------------------
INSERT INTO `dlzt` VALUES ('1', '1', '0');
INSERT INTO `dlzt` VALUES ('2', '2', '0');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink` (
  `LinkID` int(11) NOT NULL AUTO_INCREMENT COMMENT '友情链接自增id',
  `LinkName` varchar(255) NOT NULL COMMENT '友情链接的名称，img的alt的内',
  `LinkUrl` varchar(255) NOT NULL COMMENT '友情链接网站的链接地址',
  `LinkLogo` varchar(255) NOT NULL COMMENT '友情链接的logo',
  `ShowOrder` int(11) NOT NULL COMMENT '在页面的显示顺序,数字越小越靠前',
  PRIMARY KEY (`LinkID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friendlink
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `GoodsID` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `CatID` int(11) DEFAULT NULL COMMENT '商品所属商品分类id，取值category的cat_id',
  `GoodsName` varchar(120) DEFAULT NULL COMMENT '商品的名称',
  `NameStyle` varchar(60) DEFAULT NULL COMMENT '商品名称显示的样式；包括颜色和字体样式',
  `BrandID` int(11) DEFAULT NULL COMMENT '品牌id，取值于brand 的brand_id',
  `GoodsStock` int(11) DEFAULT NULL COMMENT '商品库存数量',
  `ShopPrice` decimal(10,2) DEFAULT NULL COMMENT '本店售价',
  `Description` varchar(255) DEFAULT NULL COMMENT '商品的详细描述',
  `Thumbnail` varchar(255) DEFAULT NULL COMMENT '商品在前台显示的微缩图片',
  `IsSale` tinyint(4) DEFAULT NULL COMMENT '该商品是否开放销售，1，是；0，否',
  `CreateTime` datetime DEFAULT NULL COMMENT '商品添加时间',
  `ShowOrder` smallint(6) DEFAULT NULL COMMENT '商品显示的顺序,数字越大顺序越靠后,同数字,id在前的先显示',
  `IsDelete` int(11) DEFAULT NULL COMMENT '商品是否已经删除，0，否；1，已删除',
  `IsBest` int(11) DEFAULT NULL COMMENT '是否是精品；0，否；1，是',
  `IsNew` int(11) DEFAULT NULL COMMENT '是否是新品；0，否；1，是',
  `IsHot` int(11) DEFAULT NULL COMMENT '是否热销，0，否；1，是',
  `IsPromotion` int(11) DEFAULT NULL COMMENT '是否特价促销；0，否；1，是',
  `Remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `IsShow` int(11) DEFAULT NULL,
  `IsDaGuangGao` varchar(255) DEFAULT NULL,
  `GuangGaoTu` varchar(255) DEFAULT NULL,
  `DaTu1` varchar(255) DEFAULT NULL,
  `DaTu2` varchar(255) DEFAULT NULL,
  `DaTu3` varchar(255) DEFAULT NULL,
  `XiaoTu1` varchar(255) DEFAULT NULL,
  `XiaoTu2` varchar(255) DEFAULT NULL,
  `XiaoTu3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`GoodsID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('5', '1', 'MUNA M-sofa 02系列沙发', '1', '1', '200', '5180.00', '基于多年来对北欧经典家具的深刻思考，木纳将扎实的传统家具工艺制作技术与当下生活空间的使用需求高度整合。略去过多工业粉饰的纯实木框架，将更加纯粹的自然之风带入家中，给人以身心的愉悦与放松。', 'http://ac-orbhp4de.clouddn.com/719432bbddfb3d99e2a5.jpg', '1', '2013-12-21 00:00:00', '1', '0', '0', '1', '1', '1', '1', '1', null, null, 'http://ac-orbhp4de.clouddn.com/d4b8598c95c26970f82c.jpg', 'http://ac-orbhp4de.clouddn.com/f47200cbe29c1862bd00.jpg', 'http://ac-orbhp4de.clouddn.com/30c7b0ab2248aee5bd8c.jpg', 'http://ac-orbhp4de.clouddn.com/d4b8598c95c26970f82c.jpg', 'http://ac-orbhp4de.clouddn.com/f47200cbe29c1862bd00.jpg', 'http://ac-orbhp4de.clouddn.com/30c7b0ab2248aee5bd8c.jpg');

-- ----------------------------
-- Table structure for goodsarticle
-- ----------------------------
DROP TABLE IF EXISTS `goodsarticle`;
CREATE TABLE `goodsarticle` (
  `GAID` int(11) NOT NULL AUTO_INCREMENT,
  `GoodsID` int(11) NOT NULL COMMENT '商品id，取自goods的goods_id',
  `ArticleID` int(11) NOT NULL COMMENT '文章id，取自 article 的article_id',
  PRIMARY KEY (`GAID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsarticle
-- ----------------------------

-- ----------------------------
-- Table structure for goodsgallery
-- ----------------------------
DROP TABLE IF EXISTS `goodsgallery`;
CREATE TABLE `goodsgallery` (
  `ImgID` int(11) NOT NULL AUTO_INCREMENT,
  `GoodsID` int(11) NOT NULL COMMENT '商品id',
  `ImgUrl` varchar(255) NOT NULL COMMENT '实际图片url',
  `ImgDesc` varchar(255) DEFAULT NULL COMMENT '图片说明信息',
  `Thumbnail` varchar(255) NOT NULL COMMENT '微缩图片url',
  PRIMARY KEY (`ImgID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsgallery
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `OrderID` int(11) NOT NULL AUTO_INCREMENT,
  `OrderSN` varchar(20) DEFAULT NULL COMMENT '订单号,唯一',
  `UserID` int(11) DEFAULT NULL COMMENT '用户id,同users的user_id',
  `OrderMsg` varchar(255) DEFAULT NULL COMMENT '订单附言,由用户提交订单前填写',
  `PayID` int(11) DEFAULT NULL COMMENT '用户选择的支付方式的id,取值表payment',
  `Payment` decimal(10,2) DEFAULT NULL COMMENT '已付款金额',
  `CreateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '订单生成时间',
  `GoodsID‎⁫` int(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `GoodsID‎⁫` (`GoodsID‎⁫`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`GoodsID‎⁫`) REFERENCES `goods` (`GoodsID`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('36', 'SN11111', '1', '留言', '1', '1231.20', '2018-01-04 13:38:05', '5', null);

-- ----------------------------
-- Table structure for ordergoods
-- ----------------------------
DROP TABLE IF EXISTS `ordergoods`;
CREATE TABLE `ordergoods` (
  `RecID` int(11) NOT NULL AUTO_INCREMENT,
  `OrderID` int(11) NOT NULL COMMENT '订单商品信息对应的详细信息id，取值order_info的order_id',
  `GoodsID` int(11) NOT NULL COMMENT '商品的的id，取值表goods 的goods_id',
  `GoodsNumber` int(11) NOT NULL COMMENT '商品的购买数量',
  `GoodsAttr` varchar(255) NOT NULL COMMENT '购买该商品时所选择的属性',
  PRIMARY KEY (`RecID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ordergoods
-- ----------------------------

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `PayID` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付方式自增id',
  `PayName` varchar(120) NOT NULL COMMENT '支付方式名称',
  `Enabled` tinyint(1) NOT NULL COMMENT '是否可用;0否;1是',
  `Description` varchar(255) NOT NULL COMMENT '支付方式描述',
  PRIMARY KEY (`PayID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of payment
-- ----------------------------

-- ----------------------------
-- Table structure for region
-- ----------------------------
DROP TABLE IF EXISTS `region`;
CREATE TABLE `region` (
  `RegionID` int(11) NOT NULL AUTO_INCREMENT COMMENT '表示该地区的id',
  `ParentID` int(11) DEFAULT NULL COMMENT '该地区的上一个节点的地区id',
  `RegionName` varchar(255) DEFAULT NULL COMMENT '地区的名字',
  `RegionType` int(11) DEFAULT NULL COMMENT '地区的类型,国家\\省份\\城市',
  PRIMARY KEY (`RegionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of region
-- ----------------------------

-- ----------------------------
-- Table structure for shipping
-- ----------------------------
DROP TABLE IF EXISTS `shipping`;
CREATE TABLE `shipping` (
  `ShippingID` int(11) NOT NULL AUTO_INCREMENT,
  `ShippingName` varchar(120) DEFAULT NULL COMMENT '配送方式名称',
  `Description` varchar(255) DEFAULT NULL COMMENT '配送方式描述',
  `Enabled` tinyint(4) DEFAULT NULL COMMENT '是否可用;0否;1是',
  PRIMARY KEY (`ShippingID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shipping
-- ----------------------------

-- ----------------------------
-- Table structure for useraddress
-- ----------------------------
DROP TABLE IF EXISTS `useraddress`;
CREATE TABLE `useraddress` (
  `AddressID` int(11) NOT NULL AUTO_INCREMENT,
  `Consignee` varchar(60) NOT NULL COMMENT '收货人的姓名,用户页面填写',
  `Province` smallint(6) NOT NULL COMMENT '收货人的省份,用户页面填写',
  `City` smallint(6) NOT NULL COMMENT '收货人的城市,用户页面填写',
  `District` smallint(6) NOT NULL COMMENT '收货人的地区,用户页面填写',
  `Addr` varchar(255) NOT NULL COMMENT '收货人的详细地址,用户页面填写',
  `Postcode` varchar(60) NOT NULL COMMENT '收货人的邮编,用户页面填写',
  `Tel` varchar(60) DEFAULT NULL COMMENT '收货人的电话,用户页面填写',
  `Mobile` varchar(60) DEFAULT NULL COMMENT '收货人的手机,用户页面填写',
  `Email` varchar(60) NOT NULL COMMENT '收货人的Email, 用户页面填写',
  `BestTime` varchar(120) NOT NULL COMMENT '收货人的最佳送货时间,用户页面填写',
  PRIMARY KEY (`AddressID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of useraddress
-- ----------------------------
INSERT INTO `useraddress` VALUES ('1', '1', '1', '1', '1', '1323', '1', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id,同users的user_id',
  `UserImg` varchar(255) DEFAULT NULL,
  `NickName` varchar(60) DEFAULT NULL COMMENT '昵称',
  `UserName` varchar(60) DEFAULT NULL COMMENT '用户名',
  `Password` varchar(32) DEFAULT NULL COMMENT '用户密码',
  `Sex` varchar(1) DEFAULT NULL COMMENT '性别 ;  0保密;  1男; 2女',
  `AddressID` int(11) DEFAULT NULL COMMENT '收货信息id,表值表user_address',
  `RegisterTime` datetime DEFAULT NULL COMMENT '注册时间',
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3746075707,1914896074&fm=27&gp=0.jpg', '阿霖', '854338015', 'aaaaalin512', '男', '1', '2017-12-13 01:20:56');
INSERT INTO `users` VALUES ('2', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2450994032,3525797548&fm=27&gp=0.jpg', 'G-DRAGON', '110110110', '110110110', '男', '1', null);
