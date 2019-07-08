import {tabdata,shop} from '../../services/tab'
const state={ //原始数据
  tablist:'',
  shopdata:[]
};
const getters={ //派生数据
    
};

const actions={ //异步改变
  async tab({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      console.log('1')
      let data = await tabdata()
      commit('tablist',data.result)
    })
  },
  async shop({commit},payload){
    return new Promise(async (resolve,reject)=>{
      let data = await shop(payload)
      console.log(data)
      commit('shopdata',data.result)
    })
  }
};

const mutations={// 同步改变
  tablist(state,payload){
    return state.tablist = payload
  },
  shopdata(state,payload){
    return state.shopdata = payload
  } 
};
  

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
