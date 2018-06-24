<template>
    <div id="carousel" v-on:mouseover="stop()" v-on:mouseout="start()">
        <transition-group tag="ul" name="carouselImg">
            <li v-for="(img,index) in imgs" v-show="index===mark" :key="index">
                <img :src="img.url" alt="">
                <span class="carousel-info">{{img.info}}</span>                    
            </li>
        </transition-group>
        <div class="carousel-bar">
            <span v-for="(item, index) in imgs" :key="index" :class="{ 'active':index===mark }" v-on:click="select({index})"></span>
        </div>
    </div>
</template>
<script>
import img1 from '@/assets/img/b1.jpg'
import img2 from '@/assets/img/b2.jpg'
import img3 from '@/assets/img/b3.jpg'
import img4 from '@/assets/img/b4.jpg'
export default {
  name: 'carousel',
  data: function () {
    return {
      timer: null,
      mark: 0,
      imgs: [
        {
          info: '只要不放弃努力和追求，小草也有点缀春天的价值',
          url: img1
        },{
          info: '一时的挫折往往可以通过不屈的搏击，变成学问及见识',
          url: img2
        },{
          info: '没有激流就称不上勇进，没有山峰则谈不上攀登',
          url: img3
        },{
          info: '事常与人违，事总在人为',
          url: img4
        }
      ]
    }
  },
  methods: {
    play () {
      this.mark++
      if (this.mark === this.imgs.length) {
        this.mark = 0
      }
    },
    start () {
      this.timer = setInterval(this.play, 3000)
    },
    stop () {
      clearInterval(this.timer)
    },
    select (i){
      this.mark=i.index;
    }
  },
  created() {//初始化
    this.timer = setInterval(this.play, 3000)
  },
  change (i) {
    this.mark=i;
  }
}
</script>

<style scoped>
#carousel {
  position: relative;
  width: 1000px;
  height: 360px;
  overflow: hidden;
}
#carousel ul li {
  position: absolute;
}
#carousel ul li img {
  width: 1000px;
  height: 360px;
}
.carousel-bar {
    position: absolute;
    width: 600px;
    left: 200px;
    bottom: 40px;
    text-align: center;
}
.carousel-bar span{
    position: relative;
    display: inline-block;
    width: 32px;
    height: 8px;
    margin: 0 10px;
    border-radius: 4px;
    border: 2px solid #ccc;
    background: rgba(255, 255, 255, 0.9);
}
.carousel-info{
  display: inline-block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 42px;
  z-index: 1;
  font-size: 24px;
  text-align: center;
  color: #fff;
  background: rgba(5, 5, 5, .4);
}
.active{
  background: rgba(228, 14, 131,.8) !important;
}
.carouselImg-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}
.carouselImg-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}
.carouselImg-enter {
  transform: translateX(100%);
}
.carouselImg-leave {
  transform: translateX(0);
}
</style>
