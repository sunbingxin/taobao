import newFly from "@/utils/require.js";

// my个人信息
export let myInfo = () =>{
    return newFly.post('/user/info/only/1.0.0')
}
// 订单数据
export let order = params =>{
    return newFly.post('/order/query/1.0.0',params)
}
// 订单数量
export let pendingNum = () =>{
    return newFly.post('/order/tips/1.0.0')
}
// 取消订单
export let orderDel = params =>{
    return newFly.post('/order/cancel/order/1.0.0',params)
}
