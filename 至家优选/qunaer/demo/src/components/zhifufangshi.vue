<template>

  <div id="fangshi">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">
        <span @click="fanhui">返回</span>
      </div>
      <div class="con_top_cen">
        付款
      </div>
      <div class="con_top_right">

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*支付方式 --开始*/-->
    <div class="con_con">
      <div class="con_con_item">
        <div class="con_con_item_cen">
          <div class="con_con_item_cen_left">
            <img src="../assets/img/zhifubao.png">
          </div>
          <div class="con_con_item_cen_cen">
            <div class="con_con_item_cen_cen_top">
              支付宝支付
            </div>
            <div class="con_con_item_cen_cen_bottom">
              推荐支付宝用户支付
            </div>

          </div>
          <div class="con_con_item_cen_right">
            <input type="radio" name="zhifu" checked="checked">
          </div>

        </div>

      </div>
      <div class="con_con_item">
        <div class="con_con_item_cen">
          <div class="con_con_item_cen_left">
            <img src="../assets/img/weixin.png">
          </div>
          <div class="con_con_item_cen_cen">
            <div class="con_con_item_cen_cen_top">
              微信支付
            </div>
            <div class="con_con_item_cen_cen_bottom">
              推荐微信用户支付
            </div>

          </div>
          <div class="con_con_item_cen_right">
            <input type="radio" name="zhifu">
          </div>

        </div>

      </div>

    </div>
    <!--/*支付方式 --结束*/-->


    <!--/*底部提交 --开始*/-->
    <div class="con_item05">
      <div class="con_item05_left">
        <p>实际金额：<span>￥4600.00</span></p>

      </div>
      <router-link to="fukuanchenggong">
        <div class="con_item05_right" @click="addOrder">马上支付</div>
      </router-link>

    </div>
    <!--/*底部提交 --结束*/-->


  </div>

</template>

<script>
  export default {
    name: "",
    data() {
      return {
        uId: 0,
        zt: 0,
        url: "",
        Goods: {
          name: "",
          price: "",
          OrderMsg: "留言"
        }
      }
    },
    methods: {
      fanhui() {
        history.back();
      },
      //【创建订单】 查询
      selectById() {
        this.$http.get("/api/ChuangJianSelectById?goodsId=" + this.goodsId).then(function (result) {

          this.Goods.name = result.data[0].GoodsName;
          this.Goods.price = result.data[0].ShopPrice;

          //SELECT g.GoodsName,g.XiaoTu1,o.Payment,o.OrderMsg,o.OrderSN,o.UserID,o.PayID,o.CreateTime FROM `order` AS o INNER JOIN goods AS g ON o.`GoodsID‎⁫`= g.GoodsID


        }), function (err) {
          console.log(err)
        }
      },
      //【提交订单信息】 增加
      addOrder() {

        if (this.zt == 0) {

          return;
        }


        this.$http.get("/api/addOrder?goodsId=" + this.goodsId + "&uId=" + this.uId).then(function (result) {
          if (result.data.protocol41) {

          } else {

          }

        }), function (err) {

        }
      }
    },
    created() {
      this.uId = localStorage.getItem("temp1")[0];
      this.zt = localStorage.getItem("temp")[0];

    },
    props: ["goodsId"]
  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  a {
    text-decoration: none;
  }

  #fukuan {
    width: 100%;
    height: 720px;
    background-color: #FFFFFF;
  }

  /*头部内容 --开始*/
  #fangshi .con_top {
    z-index: 100;
    width: 100%;

    height: 50px;
    background-color: #F5F5F5;
    position: fixed;
    top: 0px;
    opacity: .97;
    /*所有的子元素都是在同一行的*/
    display: flex;
    /*column 纵向  row:横向  -reverse 倒过来了*/
    flex-direction: row;
    /*主轴居中  space-around 平分  space-between两头堵死 中间平分*/
    justify-content: space-around;
    /*纵轴对齐方式flex-end*/
    align-items: center;
    flex-wrap: wrap-reverse;
    border-bottom: 1px solid #efefef;
  }

  #fangshi .con_top div {

    width: 32%;
    height: 100%;

  }

  #fangshi .con_top .con_top_left span {
    line-height: 50px;
    width: 90%;
    font-family: 新宋体;
    display: inline-block;
    margin-left: 10px;
    font-size: .8rem;
    color: #6c6c6c;
    text-decoration: none;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #fangshi .con_top .con_top_cen {
    line-height: 50px;
    text-align: center;
    font-size: .8rem;
    font-family: 新宋体;
    color: #6c6c6c;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #fangshi .con_top .con_top_right {
    line-height: 50px;
    text-align: right;

  }

  #fangshi .con_top .con_top_right a {
    color: #6c6c6c;
    font-size: .8rem;
    width: 90%;
    font-family: 新宋体;
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #fangshi .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/
  #fangshi .con_item01 {
    width: 100%;
    height: 100px;
    background-color: #ffffff;

  }

  #fangshi .con_item01 .con_item_con {
    width: 95%;
    margin: 0 auto;
    height: 100%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 100px;
    font-size: .8rem;
    color: #6c6c6c;

  }

  #fangshi .con_item02 {
    background-color: #ffffff;
    width: 100%;
    height: 120px;
    margin-top: 12px;

  }

  #fangshi .con_item02 .con_item02_cen {
    width: 95%;
    height: 120px;

    margin: 0 auto;
    display: flex;
    /*column 纵向  row:横向  -reverse 倒过来了*/
    flex-direction: row;
    /*主轴居中  space-around 平分  space-between两头堵死 中间平分*/
    justify-content: space-between;
    /*纵轴对齐方式flex-end*/
    align-items: center;
    flex-wrap: wrap-reverse;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_left {
    width: 25%;
    height: 80%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    float: left;

  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_left img {
    width: 100%;
    height: 100%;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right {
    width: 65%;
    height: 80%;
    margin-left: 15px;
    float: left;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item01 {
    width: 100%;
    height: 40%;
    line-height: 40px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-size: .8rem;

    color: #6c6c6c;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 {
    width: 100%;
    height: 30%;

    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 30px;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 p {
    font-size: .6rem;
    display: inline-block;
    color: #6c6c6c;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 p span {
    font-size: .6rem;

    color: #b0b0b0;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 {
    width: 100%;
    height: 30%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 30px;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 p {
    font-size: .6rem;
    display: inline-block;
    margin-right: 5px;
    color: #6c6c6c;
  }

  #fangshi .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 p span {
    font-size: .6rem;

    color: #b0b0b0;
  }

  #fangshi .con_item03 {
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    margin-top: 12px;
  }

  #fangshi .con_item03 .con_item03_cen {
    width: 95%;
    height: 100%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    margin: 0 auto;
  }

  #fangshi .con_item03 .con_item03_cen .con_item03_cen_top p {
    display: inline-block;
    width: 95%;
    font-size: .8rem;

    color: #6c6c6c;
  }

  #fangshi .con_item03 .con_item03_cen .con_item03_cen_top span {
    font-size: .6rem;

    color: #b2b2b2;
  }

  #fangshi .con_item03 .con_item03_cen .con_item03_cen_top {
    width: 100%;
    height: 50%;

    line-height: 40px;
  }

  #fangshi .con_item03 .con_item03_cen .con_item03_cen_bottom p {
    display: inline-block;
    width: 95%;
    font-size: .8rem;
    color: #6c6c6c;
  }

  #fangshi .con_item03 .con_item03_cen .con_item03_cen_bottom span {
    font-size: .6rem;

    color: #b2b2b2;

  }

  #fangshi .con_item03 .con_item03_cen .con_item03_cen_bottom {
    width: 100%;
    height: 50%;
    line-height: 40px;

  }

  #fangshi .con_item04 {
    background-color: #ffffff;
    width: 100%;
    height: 40px;

    margin-top: 12px;

  }

  #fangshi .con_item04 .con_item04_cen {
    width: 95%;
    height: 100%;
    background-color: #ffffff;
    margin: 0 auto;
  }

  #fangshi .con_item05 {
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: -1px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #fangshi .con_item05 .con_item05_left {
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    float: left;
    line-height: 50px;
    text-indent: 10px;
  }

  #fangshi .con_item05 .con_item05_left p {
    font-size: .9rem;

    color: #6c6c6c;
  }

  #fangshi .con_item05 .con_item05_left p span {
    font-size: .8rem;

    color: #C29328;
  }

  #fangshi .con_item05 .con_item05_right {
    width: 30%;
    height: 100%;
    background-color: #C29328;
    float: left;
    text-align: center;
    line-height: 50px;
    color: #FFFFFF;
    font-size: .9rem;
  }

  #fangshi .con_con {
    width: 100%;

    background-color: #ffffff;
  }

  #fangshi .con_con .con_con_item {
    width: 97%;
    height: 80px;
    background-color: #FFFFFF;
    margin: 0 auto;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    -webkit-align-items: center;
  }

  #fangshi .con_con .con_con_item .con_con_item_cen {
    width: 100%;
    height: 80%;

  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_left {
    width: 20%;
    height: 100%;

    float: left;
    display: flex;
    -webkit-align-items: center;
  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_left img {
    width: 40px;
    margin: 0 auto;
  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_cen {
    width: 60%;
    height: 100%;

    float: left;

  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_cen .con_con_item_cen_cen_top {
    font-size: .9rem;
    font-family: 新宋体;
    color: #6c6c6c;
    width: 100%;
    height: 50%;
    line-height: 45px;
  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_cen .con_con_item_cen_cen_bottom {
    font-size: .8rem;
    font-family: 新宋体;
    color: #6c6c6c;
    width: 100%;
    height: 50%;
    line-height: 20px;
  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_right {
    width: 20%;
    height: 100%;

    float: left;
    text-align: center;
    line-height: 70px;
  }

  #fangshi .con_con .con_con_item .con_con_item_cen .con_con_item_cen_right input {
    width: 15px;
    height: 15px;
    border: 0;
  }


</style>
