<template>
    <!--在此处添加渲染的内容-->
    <div id="zhuce">
        <!--/*头部占位 --开始*/-->
        <div class="con_top_z"></div>
        <!--/*头部占位 --结束*/-->
        <!--/*头部 --开始*/-->
        <header class="con_top">
            <div class="con_top_left">
                <router-link to="/Child5"> 返回</router-link>

            </div>
            <div class="con_top_right">

            </div>
        </header>
        <!--/*头部 --结束*/-->

        <!--/*至家优选 --开始*/-->
        <div class="con_item01">

            <img src="../assets/dengluzhuce.png" alt="">

        </div>
        <div class="con_item02">


            <input type="text" class="input1">
            <input type="text" class="input2">
            <button class="btn">注册</button>

        </div>
        <div class="con_item03">

            <router-link to="/denglu"><span>登录</span></router-link>
        </div>

        <!--/*至家优选 --结束*/-->

    </div>

</template>

<script type="text/ecmascript-6">
    //将渲染的内容导出

</script>

<style>
    /**渲染内容的样式**/
    * {

        margin: 0px;
        padding: 0px;
    }

    a {
        font-size: .8rem;
        text-decoration: none;
        color: #6c6c6c;

        display: block;
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    }

    #zhuce {
        background-color: #FFFFFF;
        width: 100%;
        height: 6000px;
    }

    /*头部内容 --开始*/
    #zhuce .con_top {
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

    #zhuce .con_top div {
        width: 50%;
        height: 100%;

    }

    #zhuce .con_top .con_top_left {
        line-height: 60px;
        text-indent: 10px;
    }

    #zhuce .con_top .con_top_left .con_top_left_left {

        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    }

    #zhuce .con_top .con_top_left .con_top_left_right {
        font-size: .5rem;
        color: #9c9b9b;
        position: absolute;
        top: 1px;
        left: 50px;
    }

    #zhuce .con_top .con_top_right .icon-saoyisaoerweimasaomasaomiao {
        position: absolute;
        right: 95px;
        font-size: 1.5rem;
        top: 20px;
    }

    #zhuce .con_top .con_top_right .icon-gouwuche {
        position: absolute;
        right: 15px;
        font-size: 1rem;
        top: 19px;
    }

    #zhuce .con_top .con_top_right .icon-sousuo {
        position: absolute;
        right: 10px;
        font-size: 1.5rem;
        top: 15px;
    }

    #zhuce .con_top_z {
        width: 100%;
        height: 50px;
        background-color: #FFFFFF;
    }

    /*头部内容 --结束*/

    #zhuce .con_item01 {

        width: 100%;
        margin-top: 50px;
        display: flex;
        /*column 纵向  row:横向  -reverse 倒过来了*/
        flex-direction: row;

        /*主轴居中  space-around 平分  space-between两头堵死 中间平分*/
        justify-content: space-around;
        /*纵轴对齐方式flex-end*/
        align-items: center;
        flex-wrap: wrap-reverse;
    }

    #zhuce .con_item01 img {
        width: 100%;

        margin-bottom: 5px;
    }

    #zhuce .con_item02 {

        text-align: center;
        width: 100%;
        /*column 纵向  row:横向  -reverse 倒过来了*/
        flex-direction: row;
        /*主轴居中  space-around 平分  space-between两头堵死 中间平分*/
        justify-content: space-around;
        /*纵轴对齐方式flex-end*/
        align-items: center;
        flex-wrap: wrap-reverse;
    }

    #zhuce .con_item02 .input1 {

        width: 80%;
        height: 30px;
        margin-top: 20px;
        border: 1px solid #b1b1b1;
        -webkit-border-radius: 2px;

    }

    #zhuce .con_item02 .input2 {
        width: 80%;
        height: 30px;
        margin-top: 20px;
        border: 1px solid #b1b1b1;
        -webkit-border-radius: 2px;
    }

    #zhuce .con_item02 .btn {
        -webkit-border-radius: 2px;
        width: 80%;
        height: 30px;
        border: 0;
        line-height: 30px;
        background-color: #C29328;
        color: #ffffff;
        margin-top: 20px;

    }

    #zhuce .con_item02 span {
        float: right;
        margin-top: 10px;
        margin-right: 10%;
        font-size: 0.8rem;

    }

    #zhuce .con_item03 {
        width: 80%;
        margin: 10px auto 0;
        height: 100px;

        text-align: right;
    }
</style>
