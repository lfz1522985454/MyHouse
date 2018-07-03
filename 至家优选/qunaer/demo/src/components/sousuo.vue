<template>

  <div id="sousuo">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
      <router-link to="/Child1"><span class="con_top_left">返回</span></router-link>
      <input type="text" class="con_top_con" v-model="name">
      <span class="con_top_right" @click="dianji()">搜索</span>
    </header>
    <!--/*头部 --结束*/-->


  </div>

</template>


<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        dataGoods: [],
        name:""
      }
    },
    methods: {

      selectByName() {
        this.$http.get("/api/selectByName",{name:this.name}).then(function (result) {
          this.dataGoods = result;
        }), function (err) {
          console.log(err)
        }
      },
      dianji() {
        this.selectByName();
      }

    },
    created() {


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
  }

  #sousuo {
    background-color: #FFFFFF;
    width: 100%;
    height: 6000px;
  }

  /*头部内容 --开始*/
  #sousuo .con_top {

    z-index: 100;
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    position: fixed;
    top: 0px;

  }

  #sousuo .con_top div {
    width: 50%;
    height: 100%;

  }

  #sousuo .con_top .con_top_left {
    color: #6c6c6c;
    text-decoration: none;
    font-size: 0.9rem;
    width: 15%;
    line-height: 50px;
    margin-left: 10px;
  }

  #sousuo .con_top .con_top_con {
    text-indent: 1em;
    -webkit-border-radius: 5px;
    border: 1px solid #dfdfdf;
    width: 75%;
    height: 25px;
    line-height: 25px;
    margin-right: 10px;
    margin-left: 5px;

  }

  #sousuo .con_top .con_top_right {
    color: #6c6c6c;
    font-size: 0.9rem;
    width: 10%;
    line-height: 50px;
    float: right;
  }

  #sousuo .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
  }

  /*头部内容 --结束*/



</style>
