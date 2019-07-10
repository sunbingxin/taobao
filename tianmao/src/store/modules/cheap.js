import {phone,add,cheap,address} from '../../services/cheap'
const state = {     //原始数据
    phone:'',
    cheap:'',
    address:''
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
    },
    async addres({commit},payload){
        return new Promise(async (resolve,reject)=>{
             let data = await address(payload)
             console.log(data)
             if(data.res_code === 1){
                wx.showToast({
                    title: '成功',
                    icon: 'error',
                    duration: 2000
                })
                wx.navigateBack({
                    delta: 1 
                  });
             }
         })
     },
    async addphone({commit},payload){
        return new Promise(async (resolve,reject)=>{
            let data = await add(payload)
            console.log(data)
            if(data.res_code === 1){
                wx.showToast({
                    title: '成功',
                    icon: 'error',
                    duration: 2000
                })
                wx.navigateBack({delta:1})
            }
        })
    },
    async cheaps({commit},payload){
        return new Promise(async (resolve,reject)=>{
             let data = await cheap()
             console.log(data)
             commit('cheap',data)
         })
     },
}
const mutations ={  //同步改变
    phone(state,payload){
        return state.phone = payload
    },
    address(state,payload){
        return state.address = payload
    },
    cheap(state,payload){
        return state.cheap = payload
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}