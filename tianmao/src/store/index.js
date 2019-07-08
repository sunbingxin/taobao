import Vue from "vue"
import Vuex from "vuex";
import createLogger from "vuex/dist/logger"
import home from "./modules/home.js";
import special from "./modules/special.js";
import detail from "./modules/detail.js";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        special,
        detail,
    },
    plugins:[createLogger()]
})