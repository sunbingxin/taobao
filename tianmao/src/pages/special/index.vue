<template>
  <div class="box">
    <div>
     <img :src="obj.specialImg"/>
     <scroll-view style="height: 100rpx; width:100% " scroll-x  :class="scrollIndex?'acScroll':null" >
       <div class="sViewDiv">
        <div class="sView" v-for="(item,key) in obj.anchors" :key="key">{{item.anchorDesc}}</div>
       </div>
     </scroll-view>
    </div>
    <scroll-view>
      <div v-if="obj.anchors" class="section" >
         <div class="heade">
           <div>
             <div></div>
             <div></div>
           </div>
           <div>{{obj.anchors[ind].anchorName}}</div>
           <div>
             <div></div>
             <div></div>
           </div>
         </div>
         <div class="cent">
           <dl @click="toDetail(item.pid)" v-for="(item,key) in obj.anchors[ind].products" :key="key">
             <dt><img :src="item.mainImgUrl" alt=""></dt>
             <dd>
               <div>{{item.title}}</div>
               <div>
                 <span>￥{{item.salesPrice}}</span>
                 <span>赚￥{{item.earnMoney}}</span>
               </div>
             </dd>
           </dl>
         </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
export default {
  data() {
    return {
      ind:0,
      scrollIndex:false,
    }
  },
  computed:{
     ...mapState({
       obj:state=>{
         return state.special.obj
       }
     })
  },
  methods:{
     ...mapActions({
       getList:"special/getList"
     }),
     toDetail(id){
        wx.navigateTo({
          url: '/pages/detail/main?id='+id,
        });
     }
  },
  onShow(){
     this.getList({siid: 181})
  },
  onPageScroll(e) {
   if(e.scrollTop>240){
     this.scrollIndex=true;
   }else{
       this.scrollIndex=false;
   }
  },
}
</script>
<style>
.box,page{
  width:100%;
  height:100%;
}
.box>div:nth-child(1)>img{
  width:100%;
}
.sViewDiv{
  display: flex;
}
.sView{
  height:100rpx;
  line-height: 100rpx;
  margin: 0px 20rpx;
  color: red;
}
.section{
  width: 100%;
  background: #f2f2f2f2;
}
.heade{
  display: flex;
  height: 160rpx;
  justify-content: center;
  align-items: center;
}
.heade>div:nth-child(2){
  margin: 0px 40rpx;
  color: #484848;
}
.heade>div:nth-child(1),.heade>div:nth-child(3){
  display: flex;
}
.heade>div:nth-child(1)>div:nth-child(1),.heade>div:nth-child(3)>div:nth-child(2){
  width:68rpx;
  height:2rpx;
  background:#484848;
  margin-top: 5rpx;
}
.heade>div:nth-child(1)>div:nth-child(2),.heade>div:nth-child(3)>div:nth-child(1){
  width:14rpx;
  height:14rpx;
  background:#484848;
  transform:rotate(45deg);
}
.cent{
  display: flex;
  flex-direction: column;
}
.cent>dl{
  border-radius:10rpx;
  display: flex;
   background:#fff;
  margin-top:20rpx;
}
.cent dd{
  padding: 20rpx;
}
.cent dd>div:nth-child(1){
  color:#323a45;
  overflow:hidden;
  text-overflow:ellipsis;
   display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  line-height:40rpx;
}
.cent dd>div:nth-child(2){
  height:120rpx;
  box-sizing:border-box;
  padding-top:80rpx;
}
.cent dd>div:nth-child(2)>span:nth-child(1){
  color:#fc5d7b;
  margin-right:20rpx;
}
.cent dd>div:nth-child(2)>span:nth-child(2){
  padding:0 6rpx;
  border-radius:6rpx;
  font-size:24rpx;
  background-color:#ffe8ed;
  color:#fc5d7b;
}
.cent dt>img{
  width:240rpx;
  height:240rpx;
}
.acScroll{
  position: fixed;
  top: 0px;
  width: 100%;
  background: #fff;
  z-index: 9999;
}
</style>

