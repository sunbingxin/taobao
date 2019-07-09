import Vue from "vue"
import Vuex from "vuex";
import createLogger from "vuex/dist/logger"
import tab from "./modules/tab.js";
import home from "./modules/home.js";
import cheap from './modules/cheap'
import special from "./modules/special.js";
import detail from "./modules/detail.js";
import my from "./modules/my.js";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        special,
        detail,
        tab,
        home,
        cheap,
        my
    },
    plugins:[createLogger()]
})