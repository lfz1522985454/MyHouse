<template>

  <div id="shousuoOk">
    <!--/*头部占位 --开始*/-->
    <div class="con_top_z"></div>
    <!--/*头部占位 --结束*/-->
    <!--/*头部 --开始*/-->
    <header class="con_top">
     <span class="con_top_left" @click="fanhui">返回</span>
      <input type="text" class="con_top_con" v-model="name" placeholder="大家都在搜：MUNA M系列五斗柜" style="font-size: .6rem">
      <span class="con_top_right" @click="dianji()">搜索</span>
    </header>
    <!--/*头部 --结束*/-->

    <!--/*至家优选 --开始*/-->
    <!--v-for="(item,index) in dataGoods"-->
    <!--<div class="con_item07">-->

    <!--<div class="con_item07_item" v-for="(item,index) in dataGoods" @click="selectGoods(item.GoodsID)">-->
    <!--<div class="con_item07_item_top">-->
    <!--<router-link to="/Child1_index"><img :src="item.Thumbnail">-->
    <!--</router-link>-->
    <!--</div>-->
    <!--<span>￥{{item.ShopPrice}}</span>-->
    <!--<p>{{item.GoodsName}}</p>-->
    <!--</div>-->


    <!--</div>-->
    <div class="conItem" v-if="dataGoods.lenght==0"
         style="background-color: #f9f9f9;height: 1000px;width: 100%;text-align: center;line-height: 200px;font-size: 1rem">
      抱歉~没有搜索到相关商品
    </div>

    <div class="conItemCon" v-for="(item,index) in dataGoods" v-if="dataGoods.lenght!=0">

      <div class="conItemCon_cen">

        <div class="conItemCon_cen_left">
          <img :src="item.Thumbnail">
        </div>
        <div class="conItemCon_cen_right">

          <div class="conItemCon_cen_right_item" style="line-height: 40px">{{item.GoodsName}}</div>
          <div class="conItemCon_cen_right_item">￥{{item.ShopPrice}}</div>
          <div class="conItemCon_cen_right_item">
            <router-link to="/Child1_index">

              <button @click="selectGoods(item.GoodsID)"
                      style="border: 0px;background-color: #b11913;width: 70px;height: 25px;-webkit-border-radius: 5px;color: #fafafa;font-size: .8rem">
                立即购买
              </button>
              <button @click="selectGoods(item.GoodsID)"
                      style="border: 0px;background-color: #62dbb0;width: 70px;height: 25px;-webkit-border-radius: 5px;color: #fafafa;font-size: .8rem">
                查看详情
              </button>
            </router-link>
          </div>

        </div>
      </div>
    </div>

    <!--/*至家优选 --结束*/-->

  </div>

</template>


<script>
  import $ from 'jquery'
  //.history.back();
  $(".con_top_left").click(function () {
    alert("a");
  })
  export default {
    data() {
      return {
        dataGoods: [],
        name: ""
      }
    },
    methods: {
      fanhui(){
        history.back();
      },
      selectByName() {
        this.$http.get("/api/selectByName?name=" + this.name).then(function (result) {
          this.dataGoods = result.data;


        }), function (err) {
          console.log(err)
        }
      },
      dianji() {
        this.selectByName();
      },
      //【首页】查看商品详情
      selectGoods(id) {
        this.$emit("getId", id);

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

  #shousuoOk {
    background-color: #f5f5f5;
    width: 100%;
    height: 6000px;
  }

  /*头部内容 --开始*/
  #shousuoOk .con_top {
    z-index: 100;
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    top: 0px;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #shousuoOk .con_top div {
    width: 50%;
    height: 100%;

  }

  #shousuoOk .con_top .con_top_left {
    color: #6c6c6c;
    text-decoration: none;
    font-size: 0.9rem;
    width: 15%;
    line-height: 50px;
    margin-left: 10px;
  }

  #shousuoOk .con_top .con_top_con {
    text-indent: 1em;
    -webkit-border-radius: 5px;
    border: 1px solid #dfdfdf;
    width: 75%;
    height: 25px;
    line-height: 25px;
    margin-right: 10px;
    margin-left: 5px;

  }

  #shousuoOk .con_top .con_top_right {
    color: #6c6c6c;
    font-size: 0.9rem;
    width: 10%;
    line-height: 50px;
    float: right;
  }

  #shousuoOk .con_top_z {
    width: 100%;
    height: 50px;
    background-color: #fff8a5;
  }

  /*头部内容 --结束*/

  #shousuoOk .conItemCon {
    width: 100%;
    height: 120px;
    background-color: #FFFFFF;
    margin-top: 10px;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }

  #shousuoOk .conItemCon_cen {
    width: 90%;
    height: 100%;

    margin: 0 auto;
  }

  .conItemCon_cen_left {
    width: 35%;
    height: 100%;

    float: left;

    display: flex;
    -webkit-align-items: center;
  }

  .conItemCon_cen_left img {
    width: 100px;
    height: 100px;
    margin: 0 auto;

  }

  .conItemCon_cen_right {
    width: 65%;
    height: 100%;

    float: left;
  }

  .conItemCon_cen_right_item {
    width: 100%;
    height: 30%;
    font-size: .8rem;
    line-height: 30px;
    color: #6c6c6c;

  }

  /*#shousuoOk .con_item07 {*/
  /*width: 95%;*/
  /*margin: 20px auto 0px;*/
  /*height: 2000px;*/

  /*}*/

  /*#shousuoOk .con_item07 div {*/
  /*width: 48%;*/
  /*height: 210px;*/
  /*margin-bottom: 5px;*/
  /*display: inline-block;*/

  /*}*/

  /*#shousuoOk .con_item07 .con_item07_item_top {*/
  /*width: 100%;*/
  /*height: 150px;*/

  /*}*/

  /*#shousuoOk .con_item07 span {*/
  /*font-size: .5rem;*/
  /*display: block;*/
  /*color: #919191;*/
  /*margin-top: 5px;*/
  /*word-break: keep-all; !* 不换行 *!*/
  /*white-space: nowrap; !* 不换行 *!*/
  /*overflow: hidden; !* 内容超出宽度时隐藏超出部分的内容 *!*/
  /*text-overflow: ellipsis; !* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*!*/
  /*}*/

  /*#shousuoOk .con_item07 p {*/
  /*color: #919191;*/
  /*font-size: .5rem;*/
  /*word-break: keep-all; !* 不换行 *!*/
  /*white-space: nowrap; !* 不换行 *!*/
  /*overflow: hidden; !* 内容超出宽度时隐藏超出部分的内容 *!*/
  /*text-overflow: ellipsis; !* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*!*/
  /*}*/

  /*#shousuoOk .con_item07 .con_item07_item_top img {*/
  /*box-shadow: 0px 0px 2px #cecece;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/

  /*!*至家优选 --结束*!*/

</style>
