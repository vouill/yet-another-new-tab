import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'particles.js'
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

window.particlesJS.load('particles-js', 'particles.json', function() {
    // console.log('callback - particles.js config loaded');
});
