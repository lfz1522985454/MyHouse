<template>

  <div id="daishouhuo">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">
        <router-link to="/Child5">返回</router-link>
      </div>
      <div class="con_top_cen">
        待收货
      </div>
      <div class="con_top_right">

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*商品信息 --开始*/-->
    <img class="showImg" v-if="daishouhuo[0]==null" src="../assets/img/yiwancheng.jpg">
    <div class="con_item02" v-if="daishouhuo[0]!=null" v-for="(item,index) in daishouhuo">
      <div class="con_item02_cen">
        <div class="con_item02_cen_left">
          <img :src="item.XiaoTu1">
        </div>
        <div class="con_item02_cen_right">

          <div class="con_item02_cen_right_item01">
            <p>{{item.GoodsName}}</p>
          </div>
          <div class="con_item02_cen_right_item02">
            <p><span>下单时间：</span>{{item.CreateTime}}</p>

          </div>


          <div class="con_item02_cen_right_item03">
            <p><span>数量：</span>1</p>
            <p><span>价格：</span>￥{{item.Payment}}</p>
          </div>

        </div>

      </div>

    </div>
    <!--/*商品信息 --结束*/-->
  </div>

</template>

<script>
  export default {
    name: "",
    data() {
      return {
        uId: 0,
        daishouhuo: []
      }
    },
    methods: {
      //【订单查询】 查询
      selectALL() {
        this.$http.get("/api/selectAllDin?uId=" + this.uId).then(function (result) {
          this.daishouhuo = result.data;
        }), function () {
        }
      }
    },
    created() {


      this.uId = localStorage.getItem("temp1")[0];


      this.selectALL();

    },


  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  .showImg {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  #daishouhuo {
    width: 100%;
    height: 720px;
    background-color: #F6F6F6;

  }

  /*头部内容 --开始*/
  #daishouhuo .con_top {
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

  #daishouhuo .con_top div {

    width: 32%;
    height: 100%;

  }

  #daishouhuo .con_top .con_top_left a {
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

  #daishouhuo .con_top .con_top_cen {
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

  #daishouhuo .con_top .con_top_right {
    line-height: 50px;
    text-align: right;

  }

  #daishouhuo .con_top .con_top_right a {
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

  #daishouhuo .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/
  #daishouhuo .con_item01 {
    width: 100%;
    height: 100px;
    background-color: #ffffff;

  }

  #daishouhuo .con_item01 .con_item_con {
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

  #daishouhuo .con_item02 {
    background-color: #ffffff;
    width: 100%;
    height: 120px;
    margin-top: 12px;

  }

  #daishouhuo .con_item02 .con_item02_cen {
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

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_left {
    width: 25%;
    height: 80%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    float: left;

  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_left img {
    width: 100%;
    height: 100%;
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right {
    width: 65%;
    height: 80%;
    margin-left: 15px;
    float: left;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item01 {
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

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 {
    width: 100%;
    height: 30%;

    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 30px;
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 p {
    font-size: .6rem;
    display: inline-block;
    color: #6c6c6c;
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item02 p span {
    font-size: .6rem;

    color: #b0b0b0;
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 {
    width: 100%;
    height: 30%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 30px;
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 p {
    font-size: .6rem;
    display: inline-block;
    margin-right: 5px;
    color: #6c6c6c;
  }

  #daishouhuo .con_item02 .con_item02_cen .con_item02_cen_right .con_item02_cen_right_item03 p span {
    font-size: .6rem;

    color: #b0b0b0;
  }

  #daishouhuo .con_item03 {
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    margin-top: 12px;
  }

  #daishouhuo .con_item03 .con_item03_cen {
    width: 95%;
    height: 100%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    margin: 0 auto;
  }

  #daishouhuo .con_item03 .con_item03_cen .con_item03_cen_top p {
    display: inline-block;
    width: 95%;
    font-size: .8rem;

    color: #6c6c6c;
  }

  #daishouhuo .con_item03 .con_item03_cen .con_item03_cen_top span {
    font-size: .6rem;

    color: #b2b2b2;
  }

  #daishouhuo .con_item03 .con_item03_cen .con_item03_cen_top {
    width: 100%;
    height: 50%;

    line-height: 40px;
  }

  #daishouhuo .con_item03 .con_item03_cen .con_item03_cen_bottom p {
    display: inline-block;
    width: 95%;
    font-size: .8rem;
    color: #6c6c6c;
  }

  #daishouhuo .con_item03 .con_item03_cen .con_item03_cen_bottom span {
    font-size: .6rem;

    color: #b2b2b2;

  }

  #daishouhuo .con_item03 .con_item03_cen .con_item03_cen_bottom {
    width: 100%;
    height: 50%;
    line-height: 40px;

  }

  #daishouhuo .con_item04 {
    background-color: #ffffff;
    width: 100%;
    height: 40px;

    margin-top: 12px;

  }

  #daishouhuo .con_item04 .con_item04_cen {
    width: 95%;
    height: 100%;
    background-color: #ffffff;
    margin: 0 auto;
  }

  #daishouhuo .con_item05 {
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: -1px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #daishouhuo .con_item05 .con_item05_left {
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    float: left;
    line-height: 50px;
    text-indent: 10px;
  }

  #daishouhuo .con_item05 .con_item05_left p {
    font-size: .9rem;

    color: #6c6c6c;
  }

  #daishouhuo .con_item05 .con_item05_left p span {
    font-size: .8rem;

    color: #C29328;
  }

  #daishouhuo .con_item05 .con_item05_right {
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

