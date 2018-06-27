<template>
  <div id="app">
    <swiper :options="swiperOption" ref="mySwiper">
      <P1></P1>
      <P2></P2>
    </swiper>
  </div>
</template>

<script>
import swiperAnimation from 'swiper-animate-cn';
const swiperAnimateCache = swiperAnimation.swiperAnimateCache;
const swiperAnimate = swiperAnimation.swiperAnimate;
import P1 from './components/P1';
import P2 from './components/P2';

export default {
  data(){
    return {
      swiperOption: {
        direction: 'vertical',
        on:{
          init: function(){
            swiperAnimateCache(this);
            swiperAnimate(this);
          }, 
          slideChangeTransitionEnd: function(){ 
            swiperAnimate(this);
          } 
        }
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    next(){
      this.swiper.slideNext();
    }
  },
  name: "app",
  components: {
    P1,
    P2,
  }
};
</script>

<style lang="scss">
#app {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('./assets/bg.jpg');
}
</style>
