<template>
  <div id="Child5">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">
        <span class="con_top_left_left">至家</span>
        <span class="con_top_left_right" style="font-size: .2rem;">Z&nbsp;H&nbsp;I&nbsp;J&nbsp;I&nbsp;A</span>
      </div>
      <div class="con_top_right">

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*内容 --开始*/-->
    <div class="con_con">
      <div class="con_con_top">
        <div class="con_con_top_top">
          <div class="con_con_top_top_item">
            <div class="con_con_top_top_item_top">
              <img style="border: 1px solid #d8d8d8" src=".././assets/img/weidenglu.png" v-if="dlzt==0">
              <img style="border: 1px solid #d8d8d8" :src="xinxi.UserImg" v-if="dlzt==1">
            </div>
            <div class="con_con_top_top_item_bottom">

              <p v-if="dlzt==1">{{xinxi.NickName}}</p></div>
            <router-link to="/denglu" v-if="dlzt==0"
                         style="font-size: .8rem;width: 100%;display: inline-block;text-align: center">立即登录
            </router-link>
          </div>

        </div>
        <div class="con_con_top_bottom">

          <ul>

            <li>
              <router-link to="/daifukuan">代付款&nbsp;0
              </router-link>
            </li>


            <li style="border-left:1px solid #9f9f9f ;border-right:1px solid #9f9f9f ">
              <router-link to="/daishouhuo">待收货&nbsp;{{count}}</router-link>
            </li>


            <li>
              <router-link to="/yiwancheng">已完成&nbsp;0</router-link>
            </li>


          </ul>
        </div>


      </div>
      <div class="con_con_bottom" style="background-color: #FFFFFF">
        <ul>
          <li>
            <div class="con_con_bottom_left"></div>
            <router-link to="/youhuijuan">
              <div class="con_con_bottom_cen">我的优惠券</div>
            </router-link>
            <div class="con_con_bottom_right"></div>
          </li>
          <!--wodeyuyue-->
          <li>
            <div class="con_con_bottom_left"></div>
            <router-link to="/wodeyuyue">
              <div class="con_con_bottom_cen">我的预约</div>
            </router-link>
            <div class="con_con_bottom_right"></div>
          </li>
          <li>
            <div class="con_con_bottom_left"></div>
            <!--wodeshoucang-->
            <router-link to="/wodeshoucang">
              <div class="con_con_bottom_cen">我的收藏</div>
            </router-link>
            <div class="con_con_bottom_right"></div>
          </li>
          <li>
            <div class="con_con_bottom_left"></div>
            <!--wodexiaoxi-->
            <router-link to="/wodexiaoxi">
              <div class="con_con_bottom_cen">我的消息</div>
            </router-link>
            <div class="con_con_bottom_right"></div>
          </li>


          <li>
            <div class="con_con_bottom_left"></div>
            <div class="con_con_bottom_cen">关于至家</div>
            <div class="con_con_bottom_right"></div>
          </li>
          <li v-if="dlzt==1"
              style="width: 80%;margin:10px auto 0;background-color: red;z-index:99;text-align: center;-webkit-border-radius: 10px;">
            <div class="con_con_bottom_left"></div>
            <!--<router-link to="/denglu">-->
            <div class="con_con_bottom_cen" @click="tuichu"
                 style="color: #FFFFFF;text-align: center;text-indent: 2em;font-size: .9rem;"
            >退出登录
            </div>
            <!--</router-link>-->
            <div class="con_con_bottom_right"></div>
          </li>
        </ul>


      </div>


    </div>
    <!--/*内容 --结束*/-->
    <!--/*底部 --开始*/-->
    <div id="bottom">
      <ul>
        <li>
          <router-link to="/Child1"><span>首页</span></router-link>
        </li>
        <li>
          <router-link to="/Child2"><span>发现</span></router-link>
        </li>
        <li>
          <router-link to="/Child3"><span>分类</span></router-link>
        </li>
        <li>
          <router-link to="/Child4"><span>至家</span></router-link>
        </li>
        <li>
          <router-link to="/Child5"><span>个人</span></router-link>
        </li>
      </ul>
    </div>
    <!--/*底部 --结束*/-->
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "",
    data() {
      return {
        count: 0,
        dlzt: 0,
        uId: 0,
        xinxi: {}
      }
    },
    methods: {
      tuichu() {
        let arr2 = [0];
        localStorage.setItem("temp1", arr2)
        this.$http.get("/api/tuichuDl?uId=" + this.uId).then(function (result) {
          //退出登录 修改登录状态


        }, function () {

        })
      },
      //【首页】默认查询登录状态
      selectDlzt() {
        var _this = this;
        this.$http.get("/api/IndexSelectDlzt").then(function (result) {
          if (result.data == "0") {
            let arr = [0];
            localStorage.setItem("temp", arr);//登录状态
            let arr1 = [0];
            localStorage.setItem("temp1", arr1);//用户Id

            return;
          }
          let arr = [result.data[0].Dlzt];
          localStorage.setItem("temp", arr);//登录状态
          let arr1 = [result.data[0].UserID];
          localStorage.setItem("temp1", arr1);//用户Id

          // alert(result.data[0].Dlzt);
          // alert(localStorage.getItem("temp"));
          // // alert("用户名：" + result.data[0].UserName + "\n密码：" + result.data.Password);
        }, function (err) {

        })
      },
      selectXinXi() {
        var _this = this;
        this.$http.get("/api/selectUser?uId=" + this.uId).then(function (result) {
          _this.xinxi = result.data[0];
        }, function () {

        });
      },
      //查询行数
      selectCount() {
        var _this = this;
        this.$http.get("/api/selectCount?uId=" + this.uId).then(function (result) {
          _this.count = result.data[0].count;
        }, function () {

        });


      }

    },
    created() {
      $('html, body').animate({scrollTop: 0}, 0);
      this.selectDlzt();
      this.dlzt = localStorage.getItem("temp")[0];
      this.uId = localStorage.getItem("temp1")[0];
      if (this.dlzt == 1) {
        this.selectXinXi();
        this.selectCount();
      }

      // alert(this.uId)
      // if (this.dlzt == 1) {
      //   this.selectCount();
      //   this.selectUser();
      //
      //
      // }
      //


    }
  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: #6c6c6c;
  }

  #Child5 {
    width: 100%;
    height: 710px;
    background-color: #FFFFFF;
  }

  /*头部内容 --开始*/
  #Child5 .con_top {
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

  #Child5 .con_top div {
    width: 50%;
    height: 100%;

  }

  #Child5 .con_top .con_top_left {
    line-height: 60px;
    text-indent: 10px;
  }

  #Child5 .con_top .con_top_left .con_top_left_left {
    font-size: 1rem;

    color: #6c6c6c;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child5 .con_top .con_top_left .con_top_left_right {
    font-size: .5rem;
    color: #9c9b9b;
    position: absolute;
    top: 1px;
    left: 50px;
  }

  #Child5 .con_top .con_top_right .icon-sousuo {
    position: absolute;
    right: 10px;
    font-size: 1.5rem;
    top: 12px;
    color: #6c6c6c;
  }

  #Child5 .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/
  #Child5 .con_con {
    width: 100%;
    height: 710px;

  }

  #Child5 .con_con .con_con_top {

    width: 100%;
    height: 250px;

  }

  #Child5 .con_con .con_con_top .con_con_top_top {
    width: 100%;
    height: 75%;

    display: flex;
    /*column 纵向  row:横向  -reverse 倒过来了*/
    flex-direction: row;

    /*主轴居中  space-around 平分  space-between两头堵死 中间平分*/
    justify-content: space-between;
    /*纵轴对齐方式flex-end*/
    align-items: center;
    flex-wrap: wrap-reverse;
  }

  #Child5 .con_con .con_con_top .con_con_top_top .con_con_top_top_item {
    width: 100px;
    height: 120px;

    margin: 0 auto;
  }

  .con_con_top_top_item_top {
    margin: 0 auto;
    width: 85%;
    height: 70%;

    -webkit-border-radius: 50%;
  }

  .con_con_top_top_item_top img {
    width: 100%;
    -webkit-border-radius: 50%;
    height: 100%;
  }

  .con_con_top_top_item_bottom {
    margin-top: 10px;
    width: 100%;
    height: 20%;
    background-color: #FFFFFF;
  }

  #Child5 .con_con .con_con_top .con_con_top_top .con_con_top_top_item .con_con_top_top_item_bottom p {
    line-height: 25px;
    text-align: center;
    color: #6c6c6c;
    font-family: 新宋体;
    font-size: .8rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child5 .con_con .con_con_top .con_con_top_bottom {
    width: 100%;
    height: 20%;
    background-color: #FFFFFF;
  }

  #Child5 .con_con .con_con_top .con_con_top_bottom ul {
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    -webkit-align-items: center;

  }

  #Child5 .con_con .con_con_top .con_con_top_bottom ul li {
    width: 33%;

    height: 50%;
    float: left;
    text-align: center;
    line-height: 30px;
    color: #6c6c6c;
    font-family: 新宋体;
    font-size: .8rem;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child5 .con_con .con_con_bottom {
    width: 100%;

    background-color: #FFFFFF;

  }

  #Child5 .con_con .con_con_bottom ul {
    width: 100%;

    list-style-type: none;
    background-color: #f7f7f7;

  }

  #Child5 .con_con .con_con_bottom ul li {
    height: 50px;
    width: 100%;
    border-top: 1px solid #f9f9f9;
    border-bottom: 1px solid #f9f9f9;
    background-color: #FFFFFF;
  }

  #Child5 .con_con .con_con_bottom ul li .con_con_bottom_left {
    width: 9%;
    height: 100%;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    text-align: center;
    line-height: 50px;
    color: #6c6c6c;
    font-family: 新宋体;
    font-size: .6rem;
  }

  #Child5 .con_con .con_con_bottom ul li .con_con_bottom_cen {

    width: 70%;
    height: 100%;
    color: #6c6c6c;
    font-family: 新宋体;
    font-size: .8rem;
    line-height: 50px;

    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #Child5 .con_con .con_con_bottom ul li .con_con_bottom_right {
    width: 18%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }

  #Child5 .con_con .con_con_bottom ul li div {
    float: left;

  }

  /*底部 --开始*/

  #bottom {
    opacity: .97;
    width: 100%;
    height: 50px;
    background-color: #F8F8F8;
    position: fixed;
    bottom: -1px;
    border-top: 1px solid #e6e6e6;
  }

  #bottom ul {
    list-style-type: none;

    width: 100%;
    height: 50px;
  }

  #bottom ul li {
    border: 0;
    width: 20%;
    float: left;
    height: 50px;

    text-align: center;
    line-height: 50px;
  }

  #bottom ul li a {
    display: inline-block;
    width: 100%;
    height: 50px;
    text-decoration: none;
    color: #969696;
    font-size: .6rem;

    font-family: 新宋体;
  }

  .router-link-exact-active span {
    color: #E5CD98;

  }

  /*底部 --结束*/

</style>
