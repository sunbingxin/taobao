import newFly from "@/utils/require.js";

// 主页面tab
export let tab = params =>{
    return newFly.post('/api/open/product/category/sub/1', params)
}
// 主页面
export let homeDetail = () =>{
    return newFly.post('/api/open/page/home/list/1.0.0')
}
// 主页面下面商品 上拉加载
export let botDetail = params =>{
    console.log('商品',params)
    return newFly.post('/api/open/page/home/products/1.0.0',params)
}