import Vue from "vue"
import Vuex from "vuex";
import createLogger from "vuex/dist/logger"
import tab from "./modules/tab.js";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab,
    },
    plugins:[createLogger()]
})