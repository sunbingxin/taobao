import { getPecommend, searchSort } from "@/services/seek.js";

const state = {
  productName: "",
  // detail的数据存放
  list: [],
  // 控制组件显示
  isShow: {
    isDetail: false,
    isWithout: false,
    isHistory: false
  },
  priceSort: ["价格从高到低", "价格从低到高"]
};
const mutations = {
  updateState(state, payload) {
    for (let key in payload) {
        console.log('sdsd',key)
      //list
      state[key] = payload[key];
    }
    console.log('ssss',payload);
  }
  //   abd(state, payload) {
  //       console.log('sdsdsd '+state,'1112222'+payload)
  //    return state.list = payload;

  //   }
};
const actions = {
  // 获取搜索内容
  async getSeekList({ commit }, payload) {
    new Promise(async (resolve, reject) => {
      let result = await getPecommend(payload);
      console.log(result, 12345678);
      commit("updateState", { list: result.result });
      resolve(result);
      console.log(result.data.result);
    });
  },

  // 数据排序
  async getSeekSort({ commit, state }, payload) {
    console.log("payload....", payload);
    return new Promise(async (resolve, reject) => {
      let data = await searchSort(payload);
      console.log(data, 123456789);
      commit("updateState", { list: data.result });
      resolve(data);
      console.log(data.result);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
