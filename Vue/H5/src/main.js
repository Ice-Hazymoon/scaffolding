import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "normalize.css";
import "animate.css";
import "../src/assets/styles/styles.scss";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App)
}).$mount("#app");
