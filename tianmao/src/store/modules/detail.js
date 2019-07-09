import {getDetails,getDefaults,getImgs,getAlers,getSearchs,getNeis} from "@/services"
const state={ //原始数据
  getAll:{},
};
const getters={ //派生数据
    
};

const actions={ //异步改变
   async addDetail({commit},payload){
        //1.获取pid详情
        let getDetail=await getDetails(payload); 
        //2.获取图片信息
        let getImg=await getImgs({pid: getDetail.result.pid,basePid:getDetail.result.basePid,userIdentity:getDetail.result.userIdentity})
        //3.获取默认
        let getDefault=await getDefaults(payload) 
        //4.获取提示
        let getAler=await getAlers({sstid:getDetail.result.sstid})
        //5.查询提示
        let getSearch=await getSearchs({pid:getDetail.result.pid,bid: getDetail.result.bid,uid: getDetail.result.uid,usiid: getDetail.result.usiid})
        commit("getAlls",{getDetail:getDetail.result,getDefault:getDefault.result,getImg:getImg.result,getAler:getAler.result,getSearch:getSearch.result})
    },
    async getNei({commit},payload){
        let data=await getNeis(payload);
        console.log(data);
    }
};

const mutations={// 同步改变
    getAlls(state,payload){
       return state.getAll=payload
    }
};
  

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
