<template>

  <div id="gouwu">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">


        <span @click="fanhui">返回</span>
      </div>
      <div class="con_top_cen">
        购物车
      </div>
      <div class="con_top_right">

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*商品 --开始*/-->
    <div class="con_item" v-for="(item,index) in cartGoods">
      <div class="con_item_left">
        <input type="checkbox" name='checkbox' class="fuxuan">
      </div>
      <div class="con_item_cen">
        <div class="con_item_cen_left">
          <div class="con_item_cen_left_con">
            <img :src="item.Thumbnail">
          </div>

        </div>
        <div class="con_item_cen_right">

          <div class="con_item_cen_right_item01">
            {{item.GoodsName}}
          </div>
          <div class="con_item_cen_right_item02">
            <p>款式：<span>黑色</span></p>
          </div>
          <div class="con_item_cen_right_item03">
            <p>数量：<span>{{item.GoodsNumber}}件</span></p>
          </div>
          <div class="con_item_cen_right_item04">

            <p>价格：<span>￥{{item.GoodsPrice}}</span></p>
          </div>
        </div>

      </div>
      <div class="con_item_right">


      </div>

    </div>

    <!--/*商品 --结束*/-->
    <!--/*底部提交 --开始*/-->
    <div class="con_item05">
      <div class="con_item05_left">


        <p @click="quanXuan">全选<span id="zongjia">￥4600.00</span></p>

      </div>
      <router-link to="/chuangjiandingdan">
        <div class="con_item05_right" @click="qujiesuan">去结算</div>
      </router-link>

    </div>
    <!--/*底部提交 --结束*/-->
  </div>

</template>

<script>
  import $ from 'jquery'


  var boo = true;
  export default {
    name: "",
    data() {
      return {
        sum: "",
        cartGoods: []
      }
    },
    methods: {
      fanhui(){
        history.back();
      },
      //【购物车】查询全部
      selectAll() {
        this.$http.get("/api/GouSelectAll", {}).then(function (result) {
          this.cartGoods = result.data;
        }), function (err) {
          console.log(err)
        }
      },
      sumPrice() {

      },
      quanXuan() {


        if (boo) {
          $("input[name='checkbox']").attr("checked", "true");
          boo = false;

        } else {
          $("input[type=checkbox][checked]").each(function () {
            $(this).removeAttr("checked")
          });
          boo = true;
        }


      },
      qujiesuan() {
        var a = $("input[name='checkbox']");
        for (var i = 0; i < a.length; i++) {

        }


      }
    },
    created() {
      this.selectAll();
    }


  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  #gouwu {
    width: 100%;
    height: 700px;
    background-color: #F4F4F4;
  }

  a {
    text-decoration: none;
  }

  /*头部内容 --开始*/
  #gouwu .con_top {
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

  #gouwu .con_top div {
    width: 32%;
    height: 100%;

  }

  #gouwu .con_top .con_top_left span {
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

  #gouwu .con_top .con_top_cen {
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

  #gouwu .con_top .con_top_right {
    line-height: 50px;
    text-align: right;

  }

  #gouwu .con_top .con_top_right a {
    color: #6c6c6c;
    font-size: .8rem;
    width: 90%;

    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #gouwu .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/

  #gouwu .con_item {
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    width: 100%;
    height: 150px;
    background-color: #FFFFFF;
    margin-top: 10px;
  }

  #gouwu .con_item .con_item_left {
    width: 10%;
    height: 100%;

    float: left;
    text-align: center;
    line-height: 150px;
  }

  #gouwu .con_item .con_item_left input {
    width: 15px;
    height: 15px;
    border: 0;

  }

  #gouwu .con_item .con_item_cen {
    width: 60%;
    height: 100%;
    float: left;
  }

  #gouwu .con_item .con_item_cen .con_item_cen_left {
    width: 40%;
    height: 100%;
    float: left;

    display: flex;
    /*column 纵向  row:横向  -reverse 倒过来了*/
    flex-direction: row;

    /*主轴居中  space-around 平分  space-between两头堵死 中间平分*/
    justify-content: space-between;
    /*纵轴对齐方式flex-end*/
    align-items: center;
    flex-wrap: wrap-reverse;
  }

  #gouwu .con_item .con_item_cen .con_item_cen_left .con_item_cen_left_con {
    width: 80px;
    height: 80px;

    margin: 0 auto;
  }

  #gouwu .con_item .con_item_cen .con_item_cen_left .con_item_cen_left_con img {
    width: 100%;
    height: 100%;

  }

  #gouwu .con_item .con_item_cen .con_item_cen_right {
    width: 50%;
    height: 100%;
    margin-left: 10px;
    float: left;
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item01 {
    width: 100%;
    height: 35%;

    font-size: .8rem;
    color: #414141;
    line-height: 80px;

    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/

  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item02 {
    width: 100%;
    height: 13%;

    line-height: 30px;
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item02 p {
    color: #6c6c6c;
    font-size: .6rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item02 p span {
    font-size: .6rem;
    color: #b8b8b8;
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item03 {
    width: 100%;
    height: 13%;

    line-height: 30px;
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item03 p {
    color: #6c6c6c;
    font-size: .6rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item03 p span {
    font-size: .6rem;
    color: #b8b8b8;
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item04 {
    width: 100%;
    height: 13%;

    line-height: 30px;
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item04 p {
    color: #6c6c6c;
    font-size: .6rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #gouwu .con_item .con_item_cen_right .con_item_cen_right_item04 p span {
    font-size: .6rem;
    color: #b8b8b8;
  }

  #gouwu .con_item .con_item_right {
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    -webkit-align-items: flex-end;
    padding-bottom: 55px;
  }

  #gouwu .con_item05 {
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: -1px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #gouwu .con_item05 .con_item05_left {
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    float: left;
    line-height: 50px;
    text-indent: 10px;
  }

  #gouwu .con_item05 .con_item05_left p {
    font-family: 新宋体;
    position: absolute;
    font-size: .8rem;
    color: #6c6c6c;

  }

  #gouwu .con_item05 .con_item05_left p span {
    font-size: .8rem;
    width: 65%;
    text-align: right;
    display: inline-block;

    color: #C29328;
  }

  #gouwu .con_item05 .con_item05_right {
    width: 30%;
    height: 100%;
    font-family: 新宋体;
    float: left;
    text-align: center;
    line-height: 50px;
    color: #FFFFFF;
    font-size: .9rem;
    background-color: #C29328;
  }
</style>
