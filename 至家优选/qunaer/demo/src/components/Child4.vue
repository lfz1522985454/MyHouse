<template>

  <div id="con">
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

        <router-link to="/sousuook"> <i class="iconfont icon-sousuo"></i></router-link>

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <!--/*内容 --开始*/-->
    <div class="con_main">
      <div class="con_main_item">
        <div class="con_main_item_title">
          Zycco体验家 - 海晟名苑

        </div>
        <div class="con_main_item_top">
          <!--<p>职住一体|并非所有生活都那么精彩，所幸我们还有...</p>-->
          <img src=".././assets/img/index4_item01.png">
        </div>
        <div class="con_main_item_bottom">
          <span>北京·海晟名苑</span>
        </div>
      </div>
      <div class="con_main_item">
        <div class="con_main_item_title">
          Zycco体验家 - 金港国际

        </div>
        <div class="con_main_item_top">
          <!--<p>职住一体|并非所有生活都那么精彩，所幸我们还有...</p>-->
          <img src=".././assets/img/index4_item02.png">
        </div>
        <div class="con_main_item_bottom">
          <span>北京·金港国际</span>
        </div>
      </div>
      <div class="con_main_item">
        <div class="con_main_item_title">
          Zycco体验家 - 幸福公寓

        </div>
        <div class="con_main_item_top">
          <!--<p>职住一体|并非所有生活都那么精彩，所幸我们还有...</p>-->
          <img src=".././assets/img/index4_item03.png">
        </div>
        <div class="con_main_item_bottom">
          <span>北京·幸福公寓</span>
        </div>
      </div>
      <div class="con_main_item">
        <div class="con_main_item_title">
          Zycco体验家 - 北卫新园

        </div>
        <div class="con_main_item_top">
          <!--<p>职住一体|并非所有生活都那么精彩，所幸我们还有...</p>-->
          <img src=".././assets/img/index4_item04.png">
        </div>
        <div class="con_main_item_bottom">
          <span>北京·北卫新园</span>
        </div>
      </div>
      <div class="con_main_item">
        <div class="con_main_item_title">
          Zycco体验家 - 金港国际

        </div>
        <div class="con_main_item_top">
          <!--<p>职住一体|并非所有生活都那么精彩，所幸我们还有...</p>-->
          <img src=".././assets/img/index4_item02.png">
        </div>
        <div class="con_main_item_bottom">
          <span>北京·金港国际</span>
        </div>
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
      return {}
    },
    methods: {},
    created() {
      $('html, body').animate({scrollTop: 0}, 0);
    }
  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  #con {
    width: 100%;

    background-color: #FFFFFF;
  }

  /*头部内容 --开始*/
  #con .con_top {
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

  #con .con_top div {
    width: 50%;
    height: 100%;

  }

  #con .con_top .con_top_left {
    line-height: 60px;
    text-indent: 10px;
  }

  #con .con_top .con_top_left .con_top_left_left {
    font-size: 1rem;

    color: #6c6c6c;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #con .con_top .con_top_left .con_top_left_right {
    font-size: .5rem;
    color: #9c9b9b;
    position: absolute;
    top: 1px;
    left: 50px;
  }

  #con .con_top .con_top_right .icon-sousuo {
    position: absolute;
    right: 10px;
    font-size: 1.5rem;
    top: 12px;
    color: #6c6c6c;
  }

  #con .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/

  #con .con_main {
    width: 100%;
    height: 1500px;

  }

  #con .con_main .con_main_item {
    width: 100%;
    -webkit-border-radius: 2px;
    margin: 0px auto 10px;
    height: 270px;

    box-shadow: 0px 0px 5px #bfbfbf;
  }

  #con .con_main .con_main_item .con_main_item_title {
    width: 100%;
    height: 40px;
    font-size: .8rem;
    color: #6c6c6c;;
    line-height: 40px;
    text-indent: 2px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #con .con_main .con_main_item .con_main_item_top {
    width: 100%;
    height: 195px;
    line-height: 335px;
    background-color: #bce6dd;
  }

  #con .con_main .con_main_item .con_main_item_top p {
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    width: 90%;
    margin-left: 10px;
    position: absolute;
    color: #6c6c6c;
    font-size: .9rem;

  }

  #con .con_main .con_main_item .con_main_item_top img {
    width: 100%;
    height: 100%;

  }

  #con .con_main .con_main_item .con_main_item_bottom {
    width: 97%;
    height: 35px;
    text-align: left;
    text-indent: 2px;
    line-height: 35px
  }

  #con .con_main .con_main_item .con_main_item_bottom span {
    font-size: .6rem;
    color: #bebebe;
    display: block;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
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
