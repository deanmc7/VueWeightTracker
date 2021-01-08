import Vuex from "vuex";
import Vue from "vue";
import weight from "./modules/weight";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    weight
  }
});
