import require from "@/utils/require.js";
// 搜索数据

export let getPecommend = params => {
  return require.post("/search/query/1.0.0", {
    queryWord: params,
    queryType: 0,
    querySort: "asc",
    pageIndex: 1
  }); //{title:'kh'}
};
// 搜索数据排序
export let searchSort = params => {
  console.log(params);
  return request.post("/search/query", params);
};
// 预支付接口
export let prePare = params => {
  return request.post("/order/prepare", params);
};
