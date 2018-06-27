import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "normalize.css";
import "animate.css";
import "../src/assets/styles/styles.scss";
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App)
}).$mount("#app");
