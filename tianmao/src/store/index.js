import Vue from "vue"
import Vuex from "vuex";
import createLogger from "vuex/dist/logger"
import tab from "./modules/tab.js";
import home from "./modules/home.js";
import special from "./modules/special.js";
import detail from "./modules/detail.js";
import seek from "./modules/seek.js";
import my from "./modules/my.js";
import cheap from './modules/cheap.js';
import shopcar from './modules/shopcar.js'



Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        tab,
        special,
        detail,
        seek,
        my,
        cheap,
        shopcar
    },
    plugins:[createLogger()]
})