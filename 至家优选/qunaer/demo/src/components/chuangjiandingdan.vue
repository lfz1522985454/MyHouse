<template>

  <div id="chuangjian">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">
        <span @click="fanhui">返回</span>
      </div>
      <div class="con_top_cen">
        创建订单
      </div>
      <div class="con_top_right">

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*收货地址 --开始*/-->
    <div class="con_item01">
      <router-link to="/shouhuodizhi">
        <div class="con_item_con">
          暂无收货地址

        </div>
      </router-link>
    </div>
    <!--/*收货地址 --结束*/-->
    <!--/*商品信息 --开始*/-->
    <div class="con_item02">
      <div class="con_item02_cen">
        <div class="con_item02_cen_left">
          <img :src="Goods.XiaoTu1">
        </div>
        <div class="con_item02_cen_right">

          <div class="con_item02_cen_right_item01">
            <p>{{Goods.name}}</p>
          </div>
          <div class="con_item02_cen_right_item02">
            <p><span>款式：</span>原木色</p>
            <p><span>规格：</span>160cm长*40cm宽*53cm高</p>
          </div>


          <div class="con_item02_cen_right_item03">
            <p><span>数量：</span>1</p>
            <p><span>价格：</span>￥{{Goods.price}}</p>
          </div>

        </div>

      </div>

    </div>
    <!--/*商品信息 --结束*/-->
    <!--/*优惠券 --开始*/-->
    <div class="con_item03">
      <div class="con_item03_cen">

        <div class="con_item03_cen_top">
          <p>优惠券：未使用</p><span>0张</span>
        </div>
        <div class="con_item03_cen_bottom">
          <p>限时购：</p><span>无</span>
        </div>
      </div>

    </div>
    <!--/*优惠券 --结束*/-->
    <!--/*留言 --开始*/-->
    <div class="con_item04">
      <div class="con_item04_cen">

        <input type="text" style="width: 100%;height: 100%;border: 0px;font-size: .9rem" placeholder="留言">
      </div>
    </div>
    <!--/*留言 --结束*/-->
    <!--/*底部提交 --开始*/-->
    <div class="con_item05">
      <div class="con_item05_left">
        <p>实际金额：<span>￥4600.00</span></p>

      </div>
      <router-link to="/zhifufangshi">
        <div class="con_item05_right">提交订单</div>
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
        Goods: {
          name: "",
          price: "",
          desc: "",
          XiaoTu1: "",

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
          this.Goods.desc = result.data[0].Description;
          this.Goods.XiaoTu1 = result.data[0].XiaoTu1;
        }), function (err) {
          console.log(err)
        }
      },
    },
    created() {

      this.selectById();
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

  #chuangjian {
    width: 100%;
    height: 720px;
    background-color: #F4F4F4;
  }

  /*头部内容 --开始*/
  #chuangjian .con_top {
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

  #chuangjian .con_top div {

    width: 32%;
    height: 100%;

  }

  #chuangjian .con_top .con_top_left span {
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

  #chuangjian .con_top .con_top_cen {
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

  #chuangjian .con_top .con_top_right {
    line-height: 50px;
    text-align: right;

  }

  #chuangjian .con_top .con_top_right a {
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

  #chuangjian .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/
  #chuangjian .con_item01 {
    width: 100%;
    height: 100px;
    background-color: #ffffff;

  }

  #chuangjian .con_item01 .con_item_con {
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

  #chuangjian .con_item02 {
    background-color: #ffffff;
    width: 100%;
    height: 120px;
    margin-top: 12px;

  }

  #chuangjian .con_item02 .con_item02_cen {
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

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_left {
    width: 25%;
    height: 80%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    float: left;

  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_left img {
    width: 100%;
    height: 100%;
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right {
    width: 65%;
    height: 80%;
    margin-left: 15px;
    float: left;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item01 {
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

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 {
    width: 100%;
    height: 30%;

    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 30px;
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 p {
    font-size: .6rem;
    display: inline-block;
    color: #6c6c6c;
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 p span {
    font-size: .6rem;

    color: #b0b0b0;
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 {
    width: 100%;
    height: 30%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 30px;
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 p {
    font-size: .6rem;
    display: inline-block;
    margin-right: 5px;
    color: #6c6c6c;
  }

  #chuangjian .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 p span {
    font-size: .6rem;

    color: #b0b0b0;
  }

  #chuangjian .con_item03 {
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    margin-top: 12px;
  }

  #chuangjian .con_item03 .con_item03_cen {
    width: 95%;
    height: 100%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    margin: 0 auto;
  }

  #chuangjian .con_item03 .con_item03_cen .con_item03_cen_top p {
    display: inline-block;
    width: 95%;
    font-size: .8rem;

    color: #6c6c6c;
  }

  #chuangjian .con_item03 .con_item03_cen .con_item03_cen_top span {
    font-size: .6rem;

    color: #b2b2b2;
  }

  #chuangjian .con_item03 .con_item03_cen .con_item03_cen_top {
    width: 100%;
    height: 50%;

    line-height: 40px;
  }

  #chuangjian .con_item03 .con_item03_cen .con_item03_cen_bottom p {
    display: inline-block;
    width: 95%;
    font-size: .8rem;
    color: #6c6c6c;
  }

  #chuangjian .con_item03 .con_item03_cen .con_item03_cen_bottom span {
    font-size: .6rem;

    color: #b2b2b2;

  }

  #chuangjian .con_item03 .con_item03_cen .con_item03_cen_bottom {
    width: 100%;
    height: 50%;
    line-height: 40px;

  }

  #chuangjian .con_item04 {
    background-color: #ffffff;
    width: 100%;
    height: 40px;

    margin-top: 12px;

  }

  #chuangjian .con_item04 .con_item04_cen {
    width: 95%;
    height: 100%;
    background-color: #ffffff;
    margin: 0 auto;
  }

  #chuangjian .con_item05 {
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: -1px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #chuangjian .con_item05 .con_item05_left {
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    float: left;
    line-height: 50px;
    text-indent: 10px;
  }

  #chuangjian .con_item05 .con_item05_left p {
    font-size: .9rem;

    color: #6c6c6c;
  }

  #chuangjian .con_item05 .con_item05_left p span {
    font-size: .8rem;

    color: #C29328;
  }

  #chuangjian .con_item05 .con_item05_right {
    width: 30%;
    height: 100%;
    background-color: #C29328;
    float: left;
    text-align: center;
    line-height: 50px;
    color: #FFFFFF;
    font-size: .9rem;
  }

</style>

