<template>
  <div id="app">
    <router-view @getId="getId" :goodsId="goodsId"></router-view>
  </div>
</template>


<script>
  import $ from 'jquery'

  export default {
    name: 'app',
    data() {
      return {
        goodsId: ""
      }
    },
    methods: {
      getId(id) {
        this.goodsId = id;
      }
    },
    created() {

    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

</style>
