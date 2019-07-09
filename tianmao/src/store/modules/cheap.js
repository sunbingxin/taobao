import {phone} from '../../services/cheap'
const state = {     //原始数据
    phone:''
}
const getters = {   //派生数据

}
const actions = {   //异步改变
    async phones({commit},payload){
       return new Promise(async (resolve,reject)=>{
            let data = await phone()
            console.log(data)
            commit('phone',data.result)
        })
    }
}
const mutations ={  //同步改变
    phone(state,payload){
        return state.phone = payload
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}