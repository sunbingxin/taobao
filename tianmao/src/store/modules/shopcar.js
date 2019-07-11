import {buyShops} from '@/services';
const state={

}

const getters={

}

const actions={
 async buyShop({commit},payload){
      let data = await buyShops(payload);
      return data;
  }
}

const mutations={

}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
   }
   