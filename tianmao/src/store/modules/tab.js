import {tabdata,shop} from '../../services/tab'
const state={ //原始数据
  tablist:'',
  shopdata:[],
  child:[]
};
const getters={ //派生数据
    
};

const actions={ //异步改变
  async tab({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await tabdata()
      commit('tablist',{data:data.result,id:payload})
    })
  },
  async click({commit},payload){
    return new Promise(async (resolve,reject)=>{
      commit('clicknav',payload)
    })
  },
  async shop({commit},payload){
    return new Promise(async (resolve,reject)=>{
      let data = await shop(payload)
      console.log(data)
      commit('shopdata',{data:data.result,pageIndex:payload.pageIndex})
    })
  }
};

const mutations={// 同步改变
  tablist(state,payload){
    payload.data.forEach(item=>{
      if(item.cid === payload.id*1){
        state.child = item.childs
      }
    })
    return state.tablist = payload.data
  },
  clicknav(state,payload){
    state.tablist.forEach(item=>{
      if(item.cid === payload*1){
        state.child = item.childs
      }
    })
    return state.child
  },
  shopdata(state,payload){
    if(payload.pageIndex === 1){
      state.shopdata = []
      payload.data.forEach(item=>{
        state.shopdata.push(item)
      })
    }else{
      payload.data.forEach(item=>{
        state.shopdata.push(item)
      })
    }
    
    return state.shopdata
  } 
};
  

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
