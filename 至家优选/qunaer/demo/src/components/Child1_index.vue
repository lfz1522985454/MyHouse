<template>

  <div id="Child1_index">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z">

    </div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">
        <span @click="fanhui">返回</span>
      </div>
      <div class="con_top_cen">
        商品详情
      </div>
      <div class="con_top_right">
        <router-link to="/gouwuche">购物车</router-link>
      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*内容头部 --开始*/-->
    <div class="con_item01">
      <div style="height: 30%;" class="con_item01_01">
        <p class="con_item01_01_title">
          {{Goods.name}}
        </p>
      </div>
      <div style="height: 20%;" class="con_item01_02"> Zycco</div>
      <div style="height: 40%;" class="con_item01_03"><span class="left">￥{{Goods.price}}</span><s
        class="right">￥700.00</s></div>
    </div>
    <!--/*内容头部 --结束*/-->
    <!--/*商品图片 --开始*/-->
    <div class="con_item02">
      <div class="con_item02_img">
        <!--<img src="../assets/img/index2img.png">-->
        <div class="img_gallery">

          <div class="main_img">
            <ul>
              <li><span class="img_2">
                  <img :src="Goods.DaTu1">
              </span></li>
              <li><span class="img_3">
                <img :src="Goods.DaTu2">
              </span></li>
              <li>
                <span class="img_1">
             <img :src="Goods.DaTu3">
             </span>

              </li>


            </ul>
          </div>

        </div>
      </div>

    </div>
    <!--/*商品图片 --结束*/-->
    <!--/*款式规格 --开始*/-->
    <div class="con_item03">
      <div class="con_item03_top">
        <div class="con_item03_top_left">
          款式：
        </div>
        <div class="con_item03_top_right">
          <div class="con_item03_top_right_item showBo01" style="border:1px solid #C29328" @click="kuanshi1">灰色</div>
          <div class="con_item03_top_right_item showBo02" @click="kuanshi2">黑色</div>
        </div>

      </div>
      <div class="con_item03_bottom">
        <div class="con_item03_bottom_left">
          规格：
        </div>
        <div class="con_item03_bottom_right">
          <div class="con_item03_bottom_right_item" style="border: 1px solid #C29328">默认</div>

        </div>

      </div>
    </div>
    <!--/*款式规格 --结束*/-->
    <!--/*产品描述 --开始*/-->
    <div class="con_item04">
      <div class="con_item04_item1">
        <p><span>产品描述：</span>{{Goods.desc}}</p>
      </div>
      <div class="con_item04_item2">
        <p><span>产品细节：</span>主材质：中温瓷</p>
      </div>
      <div class="con_item04_item3">
        <p><span>物流&服务：</span>所有产品默认由供应商负责物流以及售后。大件产品物流还清单与客服进行沟通确认。如出现产品质量问题请在签收后72小时内联系客服</p>

      </div>

    </div>
    <!--/*产品描述 --结束*/-->
    <!--/*进入品牌 --开始*/-->
    <div class="con_item05">
      <div class="con_item05_left">
        <div class="con_item05_left_img">
          <img src="../assets/img/index.png">
        </div>

      </div>
      <div class="con_item05_cen">
        <div class="con_item05_cen_cen">
          <div class="con_item05_cen_cen_top">Creative Home</div>
          <div class="con_item05_cen_cen_bottom">在售商品124件</div>

        </div>

      </div>
      <div class="con_item05_right">
        进入品牌
      </div>

    </div>
    <!--/*进入品牌 --结束*/-->
    <!--/*新品推荐 --开始*/-->
    <div class="con_item06">
      <div class="con_item03_top">
        <p>新品推荐</p>
      </div>
      <div class="con_item03_bottom">

        <router-link to="/Child1_index">

          <div class="con_item03_bottom_item">
            <div class="con_item03_bottom_item_top">
              <img src="http://ac-orbhp4de.clouddn.com/a03080cdbb56da0caf7b.jpg">
            </div>
            <span>￥350</span>
            <p>Zycco黑色大理石挂钟</p>
          </div>
        </router-link>


      </div>

    </div>
    <!--/*新品推荐 --结束*/-->
    <!--/*体验家精选 --开始*/-->
    <div class="con_item07">
      <div class="con_item05_item01">
        <p>体验家精选</p>
      </div>
      <div class="con_item05_item02">
        <img src="http://ac-orbhp4de.clouddn.com/ce2f9c3102ba648b332f.jpg">
      </div>

    </div>
    <!--/*体验家精选 --结束*/-->
    <!--/*评论晒单 --开始*/-->
    <div class="con_item08">
      <div class="con_item08_left"><a href="#" style="color: #C29328;">评论&nbsp;</a><span>(0)</span></div>
      <div class="con_item08_cen"><a href="#">晒单&nbsp;</a><span>(0)</span></div>
      <div class="con_item08_right"><a href="#">我要评论</a></div>

    </div>
    <!--/*评论晒单 --结束*/-->
    <!--/*底部购买 --开始*/-->
    <div class="con_bottom">

      <div class="con_bottom_left"></div>
      <div class="con_bottom_cen">

        <router-link v-bind:to="url"><p @click="goumia">立即购买</p></router-link>

      </div>
      <div class="con_bottom_right"></div>
    </div>
    <!--/*底部购买 --结束*/-->


  </div>
</template>


<script>
  import $ from 'jquery'


  export default {
    name: "",
    data() {
      return {
        zt: 0,
        url: "",
        Goods: {

          name: "",
          price: "",
          desc: "",
          DaTu1: "",
          DaTu2: "",
          DaTu3: "",

        }
      }
    },
    methods: {
      fanhui() {
        history.back();
      },

      goumia() {

        if (this.zt == 0) {
          alert("亲~您还没有登录哦~");
          this.url = "denglu"
          return;
        }
        this.url = "chuangjiandingdan"

      },

      //【商品详情页面】 查询
      selectById() {
        this.$http.get("/api/DescSelectById?goodsId=" + this.goodsId).then(function (result) {
          this.Goods.name = result.data[0].GoodsName;
          this.Goods.price = result.data[0].ShopPrice;
          this.Goods.desc = result.data[0].Description;
          this.Goods.DaTu1 = result.data[0].DaTu1;
          this.Goods.DaTu2 = result.data[0].DaTu2;
          this.Goods.DaTu3 = result.data[0].DaTu3;

        }), function (err) {
          console.log(err)
        }
      },
      kuanshi1() {

        $(".showBo01").css("border", "1px solid #C29328");
        $(".showBo02").css("border", "1px solid #FFFFFF");

      },
      kuanshi2() {

        $(".showBo02").css("border", "1px solid #C29328");
        $(".showBo01").css("border", "1px solid #FFFFFF");
      }


    },
    created() {
      $('html, body').animate({scrollTop: 0}, 0);
      $(document).ready(function () {

        $(".img_gallery").hover(function () {
          $("#btn_prev,#btn_next").fadeIn()
        }, function () {
          $("#btn_prev,#btn_next").fadeOut()
        });

        $dragBln = false;

        $(".main_img").touchSlider({
          flexible: true,
          speed: 200,
          btn_prev: $("#btn_prev"),
          btn_next: $("#btn_next"),
          paging: $(".point a"),
          counter: function (e) {
            $(".point a").removeClass("on").eq(e.current - 1).addClass("on");//图片顺序点切换
            $(".img_font span").hide().eq(e.current - 1).show();//图片文字切换
          }
        });

        $(".main_img").bind("mousedown", function () {
          $dragBln = false;
        });

        $(".main_img").bind("dragstart", function () {
          $dragBln = true;
        });

        $(".main_img a").click(function () {
          if ($dragBln) {
            return false;
          }
        });

        timer = setInterval(function () {
          $("#btn_next").click();
        }, 5000);

        $(".img_gallery").hover(function () {
          clearInterval(timer);
        }, function () {
          timer = setInterval(function () {
            $("#btn_next").click();
          }, 5000);
        });

        $(".main_img").bind("touchstart", function () {
          clearInterval(timer);
        }).bind("touchend", function () {
          timer = setInterval(function () {
            $("#btn_next").click();
          }, 5000);
        });

      });


      this.zt = localStorage.getItem("temp")[0];

      if (this.goodsId != "") {
        this.selectById();
      }


    },
    props: ['goodsId']
  }


</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  #Child1_index {
    background-color: #FFFFFF;
    width: 100%;
    height: 1800px;

  }

  a {
    text-decoration: none;
  }

  /*头部内容 --开始*/
  #Child1_index .con_top {
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

  #Child1_index .con_top div {

    width: 32%;
    height: 100%;

  }

  #Child1_index .con_top .con_top_left span {
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

  #Child1_index .con_top .con_top_cen {
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

  #Child1_index .con_top .con_top_right {
    line-height: 50px;
    text-align: right;

  }

  #Child1_index .con_top .con_top_right a {
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

  #Child1_index .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/

  #Child1_index .con_item01 {
    width: 100%;
    height: 120px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #e8e8e8;;
  }

  #Child1_index .con_item01 div {
    width: 100%;
    height: 20%;

  }

  #Child1_index .con_item01 .con_item01_01_title {
    font-size: .9rem;
    color: #6c6c6c;
    width: 90%;
    font-family: 新宋体;
    display: inline-block;
    margin-left: 10px;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 60px;

  }

  #Child1_index .con_item01 .con_item01_02 {
    font-size: .6rem;
    color: #bcbcbc;
    width: 90%;
    font-family: 新宋体;
    display: inline-block;
    margin-left: 10px;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 35px;

  }

  #Child1_index .con_item01 .con_item01_03 .left {

    font-size: .8rem;
    color: #EBD39D;
    font-family: 新宋体;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 60px;
    width: 14%;

    display: inline-block;
    margin-left: 10px;
  }

  #Child1_index .con_item01 .con_item01_03 .right {
    font-size: .6rem;
    color: #6c6c6c;
    width: 14%;
    font-family: 新宋体;
    display: inline-block;
    margin-left: 10px;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    line-height: 60px;

  }

  #Child1_index .con_item02 {
    width: 100%;
    height: 440px;

  }

  #Child1_index .con_item02 .con_item02_img {
    width: 95%;
    height: 100%;

    margin: 0 auto;
  }

  #Child1_index .con_item02 .con_item02_img img {
    width: 100%;
    height: 100%;

    /*-webkit-border-bottom-right-radius: 15px;  -webkit-border-bottom-left-radius: 15px;*/
  }

  #Child1_index .con_bottom {
    z-index: 999;
    -webkit-border-radius: 5px;

    width: 95%;
    height: 40px;
    background-color: #C29328;
    margin: 0 auto;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 5px;
    display: block;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/

  }

  #Child1_index .con_bottom .con_bottom_left {
    width: 15%;
    float: left;
    height: 100%;

  }

  #Child1_index .con_bottom .con_bottom_cen {
    float: left;
    width: 70%;
    height: 100%;

    line-height: 40px;
  }

  #Child1_index .con_bottom .con_bottom_cen a p {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-family: 新宋体;
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    color: #FFFFFF;

    text-align: center;
    font-size: .8rem;

  }

  #Child1_index .con_bottom .con_bottom_right {
    width: 15%;
    float: left;
    height: 100%;

  }

  #Child1_index .con_item03 {
    width: 100%;
    height: 120px;
    margin-top: 10px;
    border-bottom: 1px solid #eaeaea;
  }

  #Child1_index .con_item03 div {
    width: 95%;
    height: 45%;

  }

  #Child1_index .con_item03 .con_item03_top {

    margin: 0 auto;
  }

  #Child1_index .con_item03 .con_item03_top .con_item03_top_left {
    width: 14%;
    background-color: #ffffff;
    height: 100%;
    font-size: .8rem;
    line-height: 50px;
    font-family: 新宋体;
    float: left;
    color: #6c6c6c;

    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item03 .con_item03_top .con_item03_top_right {
    width: 85%;
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

  #Child1_index .con_item03 .con_item03_top .con_item03_top_right .con_item03_top_right_item {
    width: 45%;
    font-family: 新宋体;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: .6rem;
    -webkit-border-radius: 2px;
    border: 1px solid #e4e4e4;
    color: #6c6c6c;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/

  }

  #Child1_index .con_item03 .con_item03_bottom {
    margin: 0 auto;

  }

  #Child1_index .con_item03 .con_item03_bottom .con_item03_bottom_left {
    width: 14%;
    background-color: #ffffff;
    height: 100%;
    font-size: .8rem;
    line-height: 50px;
    font-family: 新宋体;
    float: left;
    color: #6c6c6c;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item03 .con_item03_bottom .con_item03_bottom_right {
    width: 85%;
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

  #Child1_index .con_item03 .con_item03_bottom .con_item03_bottom_right .con_item03_bottom_right_item {
    width: 45%;

    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: .6rem;
    -webkit-border-radius: 2px;
    border: 1px solid #e4e4e4;
    color: #6c6c6c;
    font-family: 新宋体;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item04 {
    width: 95%;
    height: 150px;

    margin: 0 auto;
    border-bottom: 1px solid #eaeaea;
  }

  #Child1_index .con_item04 .con_item04_item1 {
    width: 100%;
    height: 30%;

    line-height: 50px;
  }

  #Child1_index .con_item04 .con_item04_item1 p span {
    color: #6c6c6c;
    font-size: .6rem;
    font-family: 新宋体;
  }

  #Child1_index .con_item04 .con_item04_item1 p {
    color: #b9b9b9;
    font-size: .6rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-family: 新宋体;
  }

  #Child1_index .con_item04 .con_item04_item2 {
    width: 100%;
    height: 30%;
    line-height: 50px;
  }

  #Child1_index .con_item04 .con_item04_item2 p span {
    color: #6c6c6c;
    font-size: .8rem;
    font-family: 新宋体;
  }

  #Child1_index .con_item04 .con_item04_item2 p {
    color: #b9b9b9;
    font-size: .6rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-family: 新宋体;
  }

  #Child1_index .con_item04 .con_item04_item3 {
    width: 100%;
    height: 30%;

    line-height: 50px;
  }

  #Child1_index .con_item04 .con_item04_item3 p span {
    color: #6c6c6c;
    font-size: .8rem;
    font-family: 新宋体;
  }

  #Child1_index .con_item04 .con_item04_item3 p {
    color: #b9b9b9;
    font-size: .6rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-family: 新宋体;
  }

  #Child1_index .con_item05 {
    width: 95%;
    height: 120px;

    margin: 0 auto;
    border-bottom: 1px solid #eaeaea;
  }

  #Child1_index .con_item05 .con_item05_left {
    width: 25%;
    height: 100%;

    float: left;
    display: flex;
    -webkit-align-items: center;
  }

  #Child1_index .con_item05 .con_item05_left .con_item05_left_img {
    width: 70px;
    height: 70px;

    margin: 0 auto;
  }

  #Child1_index .con_item05 .con_item05_left .con_item05_left_img img {
    width: 100%;
    height: 100%;
  }

  #Child1_index .con_item05 .con_item05_cen {
    width: 45%;
    height: 100%;

    float: left;
    display: flex;
    -webkit-align-items: center;

  }

  #Child1_index .con_item05 .con_item05_cen .con_item05_cen_cen {
    width: 100%;
    height: 70px;

  }

  #Child1_index .con_item05 .con_item05_cen .con_item05_cen_cen .con_item05_cen_cen_top {
    width: 100%;
    height: 60%;

    font-size: .9rem;
    color: #6c6c6c;
    line-height: 50px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/

  }

  #Child1_index .con_item05 .con_item05_cen .con_item05_cen_cen .con_item05_cen_cen_bottom {
    width: 100%;
    height: 40%;
    font-family: 宋体;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/

    font-size: .6rem;
    color: #6c6c6c;

  }

  #Child1_index .con_item05 .con_item05_right {
    width: 30%;
    height: 100%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    float: left;
    font-size: .9rem;
    color: #C29328;
    font-family: 新宋体;
    text-align: center;
    line-height: 120px;

  }

  /*新品推荐 --开始*/

  #Child1_index .con_item06 {

    width: 95%;
    margin: 20px auto 0;
    height: 210px;
    border-bottom: 1px solid #F0F0F0;

  }

  #Child1_index .con_item06 .con_item03_top {
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;
    line-height: 40px;

  }

  #Child1_index .con_item06 .con_item03_top p {
    font-size: .8rem;

    font-family: 新宋体;
    color: #6c6c6c;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item06 .con_item03_bottom {
    width: 100%;

    height: 160px;
    display: flex;

  }

  #Child1_index .con_item06 .con_item03_bottom .con_item03_bottom_item {
    width: 33%;
    height: 100%;
    background-color: #FFFFFF;

  }

  #Child1_index .con_item06 .con_item03_bottom .con_item03_bottom_item .con_item03_bottom_item_top {
    width: 100%;
    height: 110px;

  }

  #Child1_index .con_item06 .con_item03_bottom .con_item03_bottom_item .con_item03_bottom_item_top img {
    width: 100%;
    height: 100%;

  }

  #Child1_index .con_item06 .con_item03_bottom .con_item03_bottom_item a {

  }

  #Child1_index .con_item06 .con_item03_bottom .con_item03_bottom_item p {
    font-size: .4rem;
    color: #515151;
    font-family: 新宋体;
    width: 90%;
    margin-left: 3px;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item06 .con_item03_bottom .con_item03_bottom_item span {
    font-size: .4rem;
    color: #515151;
    width: 90%;
    margin-left: 3px;
    font-family: 新宋体;
    text-decoration: none;
  }

  /*新品推荐 --结束*/

  /*体验家精选 --开始*/
  #Child1_index .con_item07 {
    width: 95%;
    height: 220px;
    margin: 20px auto 0px;

  }

  #Child1_index .con_item07 .con_item05_item01 {
    width: 100%;
    height: 40px;
    line-height: 40px;

  }

  #Child1_index .con_item07 .con_item05_item01 p {
    font-size: .8rem;
    color: #6c6c6c;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item07 .con_item05_item02 {

    width: 100%;
    height: 170px;

  }

  #Child1_index .con_item07 .con_item05_item02 img {
    width: 100%;
    height: 100%;

  }

  /*体验家精选 --结束*/

  #Child1_index .con_item08 {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    width: 95%;
    height: 50px;

    margin: 0 auto;
  }

  #Child1_index .con_item08 .con_item08_left {

    width: 20%;
    height: 100%;
    font-family: 新宋体;
    float: left;
    font-size: .8rem;
    color: #6c6c6c;
    text-align: center;
    line-height: 50px;
    display: block;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item08 .con_item08_left a {
    font-size: .8rem;
    color: #6c6c6c;
    text-decoration: none;
    font-family: 新宋体;
  }

  #Child1_index .con_item08 .con_item08_cen {
    width: 20%;
    height: 100%;
    font-family: 新宋体;
    float: left;
    font-size: .8rem;
    color: #6c6c6c;
    text-align: center;
    line-height: 50px;
    display: block;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child1_index .con_item08 .con_item08_cen a {
    font-size: .8rem;
    color: #6c6c6c;
    text-decoration: none;
    font-family: 新宋体;
  }

  #Child1_index .con_item08 .con_item08_right {
    width: 60%;
    height: 100%;

    float: left;

    text-align: right;
    line-height: 50px;
  }

  #Child1_index .con_item08 .con_item08_right a {
    font-size: .8rem;
    font-family: 新宋体;
    color: #6c6c6c;
    text-decoration: none;
    display: block;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  .img_gallery {
    width: 100%;
    height: 440px;
    border-top: 1px solid #d7d7d7;
    overflow: hidden;
    position: relative;
  }

  .main_img {
    width: 100%;
    height: 440px;
    overflow: hidden;
    position: relative;
  }

  .main_img ul {
    width: 9999px;

    height: 440px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0
  }

  .main_img li {
    float: left;
    width: 100%;
    height: 440px;
  }

  .main_img li span {
    display: block;
    width: 100%;
    height: 440px;
  }

  .main_img li a {
    display: block;
    width: 100%;
    height: 440px;
  }

</style>
