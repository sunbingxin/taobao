import {myInfo,order,pendingNum,orderDel} from '@/services';
const moment = require('moment')
const state={ //原始数据
    myInfo:'',
    myOrder:'',
    PendNum:0
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
  async PendNum({commit}, payload){
    return new Promise(async (resolve, reject)=>{
      let data = await pendingNum();
      console.log('pendingNum',data)
      commit('pendNumber', data.result);
    })
  },

  async orderDe({commit,dispatch}, payload){
    console.log('qqq',payload)
    return new Promise(async (resolve, reject)=>{
      let data = await orderDel({
        orderNumber:payload.orderNumber
      });
      console.log('orderDel',data)
      // commit('pendNumber', data.result);
      dispatch('MyOrder',{pageIndex: 1,orderStatus: payload.orderid})
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
    state.myOrder.forEach(item=>{
      return item.createTime = formatTime(item.createTime)
    })
    console.log('myOrder',state.myOrder)
  },
  pendNumber(state,payload){
    state.PendNum = payload;
    console.log('pendNumber',state.PendNum)
  },
};

function formatTime(start_time){
  return moment(start_time*1).format('YYYY-MM-DD HH:mm:ss');
}



export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
