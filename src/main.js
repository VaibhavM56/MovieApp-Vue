// import Vue from "vue";
// import App from "./App.vue";
// import { BootstrapVue } from "bootstrap-vue";
// import JwPagination from "jw-vue-pagination";

// Vue.use(BootstrapVue);
// Vue.config.productionTip = false;

// Vue.component("jw-pagination", JwPagination);

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

import Vue from "vue";

import App from "./App";
import { BootstrapVue } from "bootstrap-vue";

// register jw pagination component globally
import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
