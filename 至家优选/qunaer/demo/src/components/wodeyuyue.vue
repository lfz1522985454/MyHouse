<template>

  <div id="wodeyuyue">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <div class="con_top_left">
        <router-link to="/Child5">返回</router-link>
      </div>
      <div class="con_top_cen">
        我的预约
      </div>
      <div class="con_top_right">

      </div>
    </header>
    <!--/*头部 --结束*/-->
    <div class="con">
      <img src="../assets/img/wodeyuyue.jpg">
    </div>

  </div>

</template>

<script>
  export default {
    name: "",
    data() {
      return {}
    },
    methods: {}
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

  #wodeyuyue .con {
    width: 100%;
    height: 700px;
    line-height: 700px;
    background-color: #F5F5F5;
  }
  #wodeyuyue .con img{
    width: 100%;
  }
  #wodeyuyue {
    width: 100%;
    height: 720px;
    background-color: #F6F6F6;
  }

  /*头部内容 --开始*/
  #wodeyuyue .con_top {
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

  #wodeyuyue .con_top div {

    width: 32%;
    height: 100%;

  }

  #wodeyuyue .con_top .con_top_left a {
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

  #wodeyuyue .con_top .con_top_cen {
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

  #wodeyuyue .con_top .con_top_right {
    line-height: 50px;
    text-align: right;

  }

  #wodeyuyue .con_top .con_top_right a {
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

  #wodeyuyue .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/

</style>
