<template>
    <div class="box">
        <swiper  indicator-dots autoplay circular class="swiperView">
            <block v-for="(item,index) in getSwiper" :key="index">
                <swiper-item>
                    <img :src="item.imgUrl"/>
                </swiper-item>
            </block>
        </swiper>
        <div>
            <div class="header">
              <div>
                  <div>￥{{getDetail&&getDetail.salesPrice}}</div>
                  <div>￥{{getDetail&&getDetail.vipPrice}}</div>
                  <img src="/static/images/黑卡@2x.png" alt="">
              </div>
              <div>分享赚{{getDetail&&getDetail.memberDiscountPrice}}</div>
            </div>
            <div class="section">{{getDetail&&getDetail.title}}</div>
            <div class="bao">快递包邮</div>
            <div class="sectionFoot" @click="clickShopping">
                <div>
                    <div>选择</div>
                    <div>{{getDefault&&getDefault[0].aname}}</div>
                </div>
                <!-- getDefault&&getDefault[0].attributeValueRelationVoList[0].vname -->
                <div>
                    <div>{{shopping}}</div>
                    <img src="/static/images/jt.png" alt="">
                </div>
            </div>
            <div class="sectionCent">
                <div>说明</div>
                <div>{{getDetail&&getDetail.description}}</div>
            </div>
            <div  class="sectionCent">
                <div>提示</div>
                <div>{{getAler}}</div>
            </div>
            <div class="sectionShow">
                <img v-for="(item,index) in getImg" :key="index" :style="{height:item.imgHeight+'rpx'}" :src="item.imgUrl"/>
            </div>
        </div>
        <div class="foot">
            <button @click="sharo">分享赚{{getDetail&&getDetail.memberDiscountPrice}}</button>
            <button @click="buyNow">立即购买</button>
        </div>
      <div class="popout" v-if="choos">
        <div>
            <div>
                <div>颜色</div>
                <div @click="exitd">X</div>
            </div>
            <div>
                <img :src="getDefault[0].attributeValueRelationVoList[ind].imgUrl" alt="">
                <div>
                    <div>￥{{pice}}</div>
                    <div>库存:{{num}}</div>
                </div>
            </div>
            <div>
                <div>颜色</div>
                <ul>
                    <li v-for="(val,index) in getDefault[0].attributeValueRelationVoList" 
                    :key="index" 
                    :class="ind===index?'active':null" 
                    @click="clickLi(index,val)"
                    >{{val.vname}}</li> 
                </ul>
            </div>
            <div>
                <div>数量</div>
                <div>
                    <span @click="btn(false)" >-</span><span>{{oNum}}</span><span @click="btn(true)">+</span>
                </div>
            </div>
            <button @click="exitd">确定</button>
        </div>
    </div>
       <input type="file">
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    data() {
        return {
            shopping:"",
            choos:false,
            ind:0,
            pice:"",
            num:"",
            oNum:1,
            pid:"",
            skuKey:"",
        }
    },
    computed: {
        ...mapState({
            getSwiper:state=>{
                //imgUrl  getDefault supplierProductPictureVoList
                let arr = state.detail.getAll.getDetail===undefined?[]:state.detail.getAll.getDetail.supplierProductPictureVoList
                return arr
            },
            getDetail:state=>{
                //description
               // console.log(state.detail.getAll.getDetail)
             return state.detail.getAll.getDetail
            },
            getDefault:state=>{
              //aname vname
              // console.log(state.detail.getAll.getDefault[0].attributeValueRelationVoList)
                return state.detail.getAll.getDefault
            },
            getAler:state=>{
                return  state.detail.getAll.getAler
            },
            getImg:state=>{
                //imgUrl imgWidth imgHeight
                let arr= state.detail.getAll.getImg===undefined?[]: state.detail.getAll.getImg;
                return arr
            }
        })
    },
 onLoad(option){
     this.addDetail({pid:option.id})
 },
 methods: {
     ...mapActions({
         addDetail:"detail/addDetail",
         getNei:"detail/getNei",
         addShopCar:"detail/addShopCar"
     }),
     clickLi(ind,val){
         this.ind=ind;
         this.diaoyong();
     },
     clickShopping(){
         this.choos=true;
         this.diaoyong();
     },
     btn(choos){
      if(choos){
       this.oNum+=1;
      }else{
        this.oNum-=1;
        if(this.oNum<1){
          this.oNum=1;
          }
      }
     },
     exitd(){
          this.choos=false;
     },
     buyNow(){
         if(this.oNum && this.pid && this.skuKey ){
            this.addShopCar({
                orderChannel:this.oNum,
                skuPidNums:[{
                    "pid":this.pid,
                    "buyNum":this.oNum,
                    "skuKey":this.skuKey
                }]
            }).then(res=>{
                if(res.res_code===1){
                    wx.navigateTo({ url: '/pages/shopcar/main' });
                }
            })
         }else{
             this.choos=true;
              this.diaoyong();
         }
     },
     diaoyong(){
       this.getNei({
             pid:this.getDefault[0].attributeValueRelationVoList[this.ind].pid,
             vids:[this.getDefault[0].attributeValueRelationVoList[this.ind].vid]
         }).then(res=>{
             this.oNum=1
             res.oNum=this.oNum;
             this.pice=res.salesPrice;
             this.num=res.store;
             this.pid=res.pid;
             this.skuKey=res.skuKey;
             this.shopping=res.skuName
         })
     },
     sharo(){
      let obj={
          title:this.getDetail.title,
          salesPrice:this.getDetail.salesPrice,
          vipPrice:this.getDetail.vipPrice,
          img:this.getDetail.mainImgUrl
      }
     wx.navigateTo({ url: '/pages/share/main?obj='+ JSON.stringify(obj) });
     }
 },
 onUnload(){
     console.log(123);
     this.shopping="";
     this.oNum="";
     this.ind=0;
 }
}
</script>

<style>
.box,page{
    width: 100%;
    height: 100%;
}
.swiperView{
    width:100vw;
    height:100vw;
}
.swiperView img{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 10rpx;
    color:#fc5d7b;
    height: 100rpx;
    align-items: center;
}
.header>div:nth-child(1){
  display: flex;
}
.header>div:nth-child(1)>div:nth-child(1){
    font-size:44rpx;
    margin-right:20rpx;
    
}
.header>div:nth-child(1)>div:nth-child(2){
    height:64rpx;
    line-height:64rpx;
    font-size:30rpx;
    color:#a97a33;
}
.header>div:nth-child(1) img{
    width:40rpx;
    height:20rpx;
    margin-top:26rpx;
    margin-left:10rpx;
}
.header>div:nth-child(2){
    font-size:24rpx;
    border:2rpx solid #fc5d7b;
    padding:6rpx 20rpx;
    height:40rpx;
    line-height:40rpx;
    border-top-left-radius:20rpx;
    border-bottom-left-radius:20rpx;
}
.section{
    font-size: 36rpx;
    box-sizing: border-box;
    padding: 0px 10rpx;
}
.sectionFoot{
    width: 100%;
    height: 50rpx;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 10prx;
    align-items: center;
    color:#999da2;
}
.sectionFoot>div{
    display: flex;
}
.sectionFoot>div>div{
    margin: 0px 10rpx;
}
.sectionFoot img{
    width: 20rpx;
    height: 20rpx;
    margin-top: 10rpx;
}
.sectionCent{
    display:flex;
    font-size:26rpx;
    height:80rpx;
    line-height:80rpx;
    box-sizing: border-box;
    padding: 0px 10rpx;
}
.sectionCent>div:nth-child(1){
    color:#676767;
    margin-right: 20rpx;
}
.sectionCent>div:nth-child(2){
    flex: 1;
    color: #fb2579;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.sectionShow{
    width: 100%;
    height: auto;
}
.sectionShow img{
    width: 100%;
}
.bao{
    font-size:24rpx;
    color:#999da2;
    height:60rpx;
    line-height: 60rpx;
    box-sizing: border-box;
    padding: 0px 10rpx;
}
.foot{
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    outline: none;
}
.foot button{
    color: #fff;
    flex: 1;
    background:linear-gradient(217deg,#f86367,#fb2579);
    border-radius:0;
   font-size:36rpx;
}
.popout{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, .5);
}
.popout>div{
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0px;
    padding: 0px 10rpx;
    box-sizing: border-box;
}
.popout>div img{
    width: 160rpx;
    height: 160rpx;
}
.popout>div>div:nth-child(1){
    display: flex;
    justify-content: space-between;
}
.popout>div>div:nth-child(2){
    margin-top: 20rpx;
    display: flex;
}
.popout>div>div:nth-child(2)>div{
    margin-left: 20rpx;
}
.popout>div>div:nth-child(2)>div>div:nth-child(2){
    color:#999da2;
    font-size: 30rpx;
    margin-top: 20rpx;
}
.popout>div>div:nth-child(3)>div{
    color:#999da2;
    font-size: 30rpx;
    margin-top: 30rpx;
}
.popout>div>div:nth-child(3)>ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.popout>div>div:nth-child(3)>ul .active{
    background:#33d6c5;
    color:#fff;
    border:2rpx solid #33d6c5;

}
.popout>div>div:nth-child(3)>ul>li{
    width: 29%;
    border: 1px solid #ccc;
    font-size:24rpx;
    border-radius:10rpx;
    margin: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rpx;
}
.popout>div>div:nth-child(4){
    display: flex;
    justify-content: space-between;
    font-size:30rpx;
    color:#999da2;
     margin: 20rpx 0;
}
.popout>div>div:nth-child(4)>div:nth-child(2){
    display: flex;
}
.popout>div>div:nth-child(4)>div:nth-child(2)>span{
    display:block;
    line-height:2;
    font-size:28rpx;
    text-align:center;
    padding:0 20rpx;
    box-sizing:border-box;
    border:2rpx solid #ccc;
    color: #000;
}
.popout button{
    width:100%;
    height:110rpx;
    line-height:110rpx;
    text-align:center;
    color:#fff;
    background:linear-gradient(217deg,#f86367,#fb2579);
    outline: none;
}
</style>
