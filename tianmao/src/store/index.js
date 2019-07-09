import Vue from "vue"
import Vuex from "vuex";
import createLogger from "vuex/dist/logger"
import tab from "./modules/tab.js";
import home from "./modules/home.js";
import cheap from './modules/cheap'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab,
        home,
        cheap
    },
    plugins:[createLogger()]
})