import newFly from "@/utils/require.js";

// my个人信息
export let myInfo = () =>{
    return newFly.post('/user/info/only/1.0.0')
}
// 订单数据
export let order = params =>{
    return newFly.post('/order/query/1.0.0',params)
}
