import {tab,homeDetail,botDetail} from '@/services/home';
const state={ //原始数据
  tabList:[],//头部导航
  homeTopimg:[],//banner
  ThreeLeft:[],//三图左
  ThreeRight:[],//三图右
  storeImg:[],//con图 + con商品
  storeDetail:[],//con商品,
  botDetail:[],//下面商品，
  parId:1,//页数
};
const getters={ //派生数据
    
};

const actions={ //异步改变
  async tabList({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await tab(payload);
      // console.log('tab',data)
      commit('tablist', data.result);
    })
  },
  async tabDetail({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await homeDetail();
      // console.log('tabDetail',data)
      commit('Detail', data.result);
    })
  },
  async botDetail({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await botDetail(payload);
      console.log('botDetail',data)
      commit('botdetail', data.result);
    })
  },
  
};

const mutations={// 同步改变
  tablist(state,payload){
    state.tabList = payload
  },
  
  Detail(state,payload){
    state.homeTopimg = payload[0].items
    state.ThreeLeft.push(payload[1].items[0])
    state.ThreeRight.push(payload[1].items[1],payload[1].items[2])
    payload.forEach((item,index)=>{
      if(index != 0 && index != 1 && index != 2 && index % 2 == 1){
        state.storeImg.push(item)
        state.storeImg.forEach(item=>{
          return item.children = ''
        })
      }else if(index != 0 && index != 1 && index != 2 && index % 2 == 0){
        state.storeDetail.push(item)
      }
    })
    state.storeImg.forEach((item,index)=>{
        return item.children = state.storeDetail[index]
    })
    // console.log(state.storeImg)
  },
  botdetail(state,payload){
    payload.forEach(item=>{
      return state.botDetail.push(item)
    })
  },
  parenId(state,payload){
    state.parId = payload
  },
  
};
  

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
