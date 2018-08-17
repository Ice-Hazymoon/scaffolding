<template>
    <div id="app">
        <div class="loading" v-if="loading">
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            <div class="text">加载中...</div>
        </div>
		<svg v-show="downIcon" class="next-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1266" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M512 768c-8 0-16-3.2-22.4-9.6l-384-384c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0L512 691.2l361.6-361.6c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-384 384c-6.4 6.4-14.4 9.6-22.4 9.6z" p-id="1267"></path></svg>
        <swiper :options="swiperOption" ref="mySwiper">
            <P1></P1>
            <P2></P2>
        </swiper>
        <div class="copy">壹视界策划运营</div>
    </div>
</template>

<script>
import swiperAnimation from "swiper-animate-cn";
const swiperAnimateCache = swiperAnimation.swiperAnimateCache;
const swiperAnimate = swiperAnimation.swiperAnimate;
import P1 from "./components/P1";
import P2 from "./components/P2";

let _this;

export default {
    data() {
        return {
            downIcon: false,
            loading: true,
            swiperOption: {
                direction: "vertical",
                on: {
                    init: function () {
                        swiperAnimateCache(this);
                        swiperAnimate(this);
                    },
                    slideChangeTransitionEnd: function () {
                        swiperAnimate(this);
                        if(this.activeIndex === 4){
                            _this.downIcon = false;
                        }else{
                            _this.downIcon = true;
                        }
                    },
                    imagesReady: () => {
                        this.loading = false;
                    }
                }
            }
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    methods: {
        next() {
            this.swiper.slideNext();
        }
    },
    name: "app",
    components: {
        P1,
        P2
    },
    mounted(){
        _this = this;
        let startScroll, touchStart, touchCurrent;
        this.swiper.slides.on('touchstart', function (e) {
            startScroll = this.scrollTop;
            touchStart = e.targetTouches[0].pageY;
        }, true);
        this.swiper.slides.on('touchmove', function (e) {
            touchCurrent = e.targetTouches[0].pageY;
            let touchesDiff = touchCurrent - touchStart;
            let slide = this;
            let onlyScrolling =
                    ( slide.scrollHeight > slide.offsetHeight ) &&
                    (
                        ( touchesDiff < 0 && startScroll === 0 ) ||
                        ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) ||
                        ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) )
                    );
            if (onlyScrolling) e.stopPropagation();
        }, true);
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
    .copy{
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        font-size: 12px;
        color: #fff;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba($color: #000000, $alpha: .5);
    }
    .next-icon{
        z-index: 998;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 20px;
        width: 50px;
        opacity: .25;
        transform: rotate(180deg);
        text-shadow:  1px 1px 1px rgba($color: #000000, $alpha: .7);
        fill: #000;
        animation: down infinite 1.5s ease;
    }
    .loading {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .text {
            margin-top: 20px;
            letter-spacing: 1px;
            font-size: 15px;
        }
        .spinner {
            width: 50px;
            height: 40px;
            text-align: center;
            font-size: 10px;
            > div {
                margin: 0 2px;
                background-color: #333;
                height: 100%;
                width: 6px;
                display: inline-block;
                animation: sk-stretchdelay 1.2s infinite ease-in-out;
            }
            .rect2 {
                animation-delay: -1.1s;
            }
            .rect3 {
                animation-delay: -1s;
            }
            .rect4 {
                animation-delay: -0.9s;
            }
            .rect5 {
                animation-delay: -0.8s;
            }
        }
        @keyframes sk-stretchdelay {
            0%,
            40%,
            100% {
                transform: scaleY(0.4);
            }

            20% {
                transform: scaleY(1);
            }
        }
        @keyframes down {
            0%{
                transform: translateY(0px);
            }
            50%{
                transform: translateY(10px);
            }
            100%{
                transform: translateY(0px);
            }
        }
    }
}
</style>
