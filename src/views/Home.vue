<template>
<div class="main">
  <div class="carousle-box">
    <app-carousel></app-carousel>
  </div>
  <div class="ad-a-c">
    <h3>六大优势</h3>
  </div>
  <div class="ad-a-c">
    <span class="ad-sbox">
      <img src="/static/img/y1.jpg" alt="">
      <div>
        <span>北美优质师资，教学品质保障</span>
        <p>100%北美师资，大部分有美国优质高等教育背景，经过VIPKID严格的师资甄选，培训、考核、淘汰机制，只留用优秀的老师。</p>
      </div>      
    </span>
    <span class="ad-sbox">
      <img src="/static/img/y2.jpg" alt="">
      <div>
        <span>约课方便，时间高效</span>
        <p>自由选择时间地点，随时约课、上课、查看课程回放，解放线下机构奔波之苦，节省时间进行更多学习探索，享受家庭时光。</p>
      </div>
    </span>
    <span class="ad-sbox">
      <img src="/static/img/y3.jpg" alt="">
      <div>
        <span>超高性价比</span>
        <p>超值价格享受高质量服务,何必花费万元, 只需40元/课起，轻松在家学英语。</p>
      </div>
    </span>
    <span class="ad-sbox">
      <img src="/static/img/y4.jpg" alt="">
      <div>
        <span>北美优质师资，教学品质保障</span>
        <p>100%北美师资，大部分有美国优质高等教育背景，经过VIPKID严格的师资甄选，培训、考核、淘汰机制，只留用优秀的老师，录取率低于10%。</p>
      </div>
    </span>
    <span class="ad-sbox">
      <img src="/static/img/y5.jpg" alt="">
      <div>
        <span>北美优质师资，教学品质保障</span>
        <p>100%北美师资，大部分有美国优质高等教育背景，经过VIPKID严格的师资甄选，培训、考核、淘汰机制，只留用优秀的老师，录取率低于10%。</p>
      </div>
    </span>
    <span class="ad-sbox">
      <img src="/static/img/y6.jpg" alt="">
      <div>
        <span>1对1授课</span>
        <p>与外教更强互动式学习,外教投入100%注意力，与孩子在课堂上进行互动练习，一节课有超过50%的时间开口说英语。</p>
      </div>
    </span>
    <div class="clear"></div>
  </div>
</div>
</template>

<script>

import Carousel from '@/components/Carousel'

export default {
  name: 'appHome',
  components: {
    'app-carousel': Carousel
  }
}
</script>

<style>
  .main{
    width: 1000px;
    height: auto;
    margin: 0 auto;
  }
  .carousle-box{
    width: 1000px;
    margin: 0 auto;
  }
  .ad-a-c{
    position: relative;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
  .ad-a-c .ad-sbox{
    display: block;
    float: left;
    width: 320px;
    margin-right: 20px;
    margin-top: 16px;
  }
  .ad-a-c .ad-sbox div{
    widows: 320px;
    height: 200x;
    padding: 0 10px;
    border: 1px solid #dfdede;
    border-top: none;
  }

  .ad-a-c .ad-sbox span{
    display: block;
    font-size: 20px;
    width: 300px;
    line-height: 70px;
    font-size: 20px;
    color: #555;
  }
  .ad-a-c .ad-sbox p{
    display: block;
    height: 86px;
    font-size: 14px;
    color: #777;
    line-height: 24px;
    text-align: left;
  }
  .ad-sbox:nth-child(3),.ad-sbox:nth-child(6){
    margin-right: 0;
  }
.ad-a-c .ad-sbox img{
    width: 320px;
}
</style>
