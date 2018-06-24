<template>
    <!-- *********** 页面头部 ********* -->
    <div class="header">
      <div class="header-box">
        <nav class='left'>
            <a href="/" class="logo">ABCedu</a>
            <router-link to="curriculum" class="nav-sub">课程
                <ul>
                    <li><router-link to="curriculum">初级</router-link></li>
                    <li><router-link to="curriculum">中级</router-link></li>
                    <li><router-link to="curriculum">高级</router-link></li>
                </ul>
            </router-link>
            <router-link to="curriculum">讲师</router-link>
            <router-link to="curriculum">考试</router-link>
            <router-link to="curriculum">活动</router-link>
        </nav>
        <div class="search left">
            <input type="text" autocomplete="off" placeholder="哪里不会 点这里">
            <s class="search-btn"></s>
            </div>
        <div class="user-bar right">
            <router-link to="">登录/注册</router-link>
            <router-link to="">消息</router-link>
            <router-link to="">收藏</router-link>
            <router-link to="" class="nav-qr">App<img src="static/img/QRcode.png" alt="下载APP二维码"></router-link>
        </div>
        <div class="clear"></div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'appHeader'
}
</script>
<style scoped>
.header {
  width: 100%;
  min-width: 1100px;
  height: 60px;
  background-color: #2e333f;
}
.header-box {
  width: 1000px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  margin: 0 auto;
}
.header a {
  padding: 0 12px;
  height: 60px;
  display: block;
  color: #eee;
}
nav .logo {
    color: #37cfae;
    font-size: 22px;
}
nav {
  display: block;
}
nav a {
  float: left;
}
.nav-sub{
    position: relative;
}
.nav-sub:hover ul{
    display: block;
}
.nav-sub ul{
    display: none;
    position: absolute;
    top:60px;
    left: 0;
    z-index: 10;
}
.nav-sub li a{
    color: #2e333f;
    background-color: #fff;
}
.nav-sub li a:hover{
    color: #37cfae;
    background-color: #ccc;
}
.search{
    position: relative;
    margin-left: 30px;
}
.search input{
    display: inline-block;
    width: 200px;
    height: 32px;
    line-height: 32px;
    padding:0 10px;
    color: #222;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #eee;
    resize: none;
}
.search-btn{
    position: absolute;
    display: block;
    line-height: 32px;
    top:14px;
    right: 2px;
    height: 34px;
    width: 34px;
    z-index: 10;
    background-image: url("/static/css/icons.png");
    background-position:-655px -720px;
    cursor: pointer;
}
.search-btn:hover{
    background-image: url("/static/css/icons.png");
    background-position: -720px -720px;
}
.nav-qr{
    position: relative;
}
.nav-qr img{
    display: none;
    position: absolute;
    top:60px;
    left:-30px;
    width:126px;
    height: 126px;
    z-index: 100;
}
.nav-qr:hover img{
    display: block;
}
nav a:hover , .user-bar a:hover{
  color: #37cfae;
  background-color: rgba(168, 167, 167, 0.212);
}
.user-bar{
    width: auto;
}
.user-bar a{
    float: left;
}
</style>
