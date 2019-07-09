import {getLists} from "@/services/index.js"
const state={ //原始数据
 obj:{}
};
const getters={ //派生数据
    
};

const actions={ //异步改变
   async getList({commit},payload){
       let data= await getLists(payload); //获取图片的所有信息
       commit("getListes",data.result)
    }
};

const mutations={// 同步改变
    getListes(state,payload){
        return state.obj=payload
    }
  };
  

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
