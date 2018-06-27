/*
 * File: P1.vue
 * Project: h5
 * File Created: Wednesday, 27th June 2018 10:09:54 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Wednesday, 27th June 2018 2:37:16 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */

<template>
    <swiper-slide>
        <div class="P1 page">
            <div class="a ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay=".5s"></div>
            <div class="b ani" swiper-animate-effect="fadeInDown" swiper-animate-duration=".5s" swiper-animate-delay="0s"></div>
        </div>
    </swiper-slide>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .P1{
        img{
            display: block;
            margin: 0 auto;
        }
        .a{
            width: 100px;
            height: 100px;
            background-color: red;
        }
        .b{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: blue;
        }
    }
</style>
