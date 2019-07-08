import require from '../utils/require'
export function tabdata(){
    return require.post('product/category/query/1.0.0')
}
export function shop(payload){
    return require.post('product/category/productList/1.0.0',{
        cid:payload.cid,
        sortType:payload.sortType,
        pageIndex:payload.pageIndex
    })
}