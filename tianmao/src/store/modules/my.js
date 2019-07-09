import {myInfo,order} from '@/services';
const state={ //原始数据
    myInfo:'',
    myOrder:''
};
const getters={ //派生数据
    
};

const actions={ //异步改变
  async MysInfo({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await myInfo();
      console.log('myInfo',data)
      commit('info', data.result);
    })
  },
  async MyOrder({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await order(payload);
      console.log('order',data)
      commit('myorder', data.result);
    })
  },
  
};

const mutations={// 同步改变
  info(state,payload){
    state.myInfo = payload
    console.log('myInfo',state.myInfo)
  },
  myorder(state,payload){
    state.myOrder = payload
    console.log('myOrder',state.myOrder)
  },
  
};
  

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
