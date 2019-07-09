<template>
  <div class="box">
    <div class="topSearch">
      <input type="text" placeholder="搜索">
    </div>
    <div class="topbar">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <li>用户推荐</li>
        <li v-for="(item,index) in tab" :key="index" @click="tabJump(item.cid)">{{item.cname}}</li>
      </scroll-view>
    </div>
    <div class="swiperTab">
      <swiper interval="2000"
       duration="1000" 
       circular
       indicator-dots="true" 
       indicator-color="rgba(161, 144, 2, .3)" 
       autoplay="true">
        <block v-for="(item,index) in Topimg" :key="index">
          <swiper-item>
            <img :src="item.imgUrl" alt="" class="slide-image" @click="imgJump(item.contentValue)">
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="ThressImg">
      <div v-for="(item,index) in TLeft" :key="index" class="left"> 
        <img :src="item.imgUrl" :style="{width:item.imgWidth / 2 + 'px','height':item.imgHeight / 2 + 'px'}" @click="imgJump(item.contentValue)">
      </div>
      <div class="right">
        <img v-for="(item,index) in TRight" :key="index" :src="item.imgUrl" :style="{width:item.imgWidth / 2 + 'px','height':item.imgHeight / 2 + 'px'}" @click="imgJump(item.contentValue)">
      </div>
    </div>
    <div class="content">
      <div class="every" v-for="(item,index) in StoreImg" :key="index">
        <img :src="item.pictUrl" alt="" @click="imgJump(item.jumpUrl)">
        <div class="tit">
          <span>精选好物|</span>
          <span>等你来抢</span>
          <span>更多></span>
        </div>
        <div class="con">
          <div v-for="(citem,cindex) in item.children.items" :key="cindex" class="eve" @click="detJump(citem.jumpUrl)" >
            <img :src="citem.imgUrl" alt="">
            <p>{{citem.title}}</p>
            <span>￥{{citem.salesPrice}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contentBot">
      <div class="tit">
        <span>精选好物|</span>
        <span>等你来抢</span>
        <span>更多></span>
      </div>
      <div class="botCon">
        <div class="botEve" v-for="(item,index) in botlist" :key="index">
          <div class="botLeft" @click="detJump(item.productVo.pid)">
            <img :src="item.productVo.mainImgUrl" alt="">
          </div>
          <div class="botRight">
            <p>{{item.productVo.title}}</p>
            <div class="free">
              <span :class="item.productVo.isFreeShipping == 1 ? 'block' : 'none' ">包邮</span>
              <span :class="item.productVo.isFreeTax == 1 ? 'block' : 'none' ">包税</span>
            </div>
            
            <div class="botPrice">
              <span>￥{{item.productVo.salesPrice}}</span>
              <span>￥{{item.productVo.vipPrice}}</span>
              <img src="../../../static/images/黑卡@2x.png" alt="">
              <span>赚￥{{item.productVo.earnMoney}}</span>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  props:{
    
  },
  components:{
 
  },
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState({
      tab: state => state.home.tabList,
      Topimg: state => state.home.homeTopimg,
      TLeft: state => state.home.ThreeLeft,
      TRight: state => state.home.ThreeRight,
      StoreImg: state => state.home.storeImg,
      botlist: state => state.home.botDetail,
      parentId: state => state.home.parId
    })
  },
  methods:{
    ...mapActions({
      tabList:'home/tabList',
      tabDetail:'home/tabDetail',
      botdetail:'home/botDetail'
    }),
    ...mapMutations({
      pareId:'home/parenId'
    }),
    tabJump(cid){
      wx.navigateTo({
        url:'/pages/tab/main?cid='+cid
      })
    },
    imgJump(siid){
       if(siid!==1){
           if(typeof(siid)==="string"){
            siid = siid.split("businessId=")[1].split("&")[0]*1
          }
          wx.navigateTo({
         url:'/pages/special/main?siid=' + siid
       })
     }
      
    },
    detJump(pid){
      if(typeof(pid)==="string"){
         pid = pid.split("businessId=")[1].split("&")[0]*1
      }
       wx.navigateTo({
        url:'/pages/detail/main?id=' + pid
      })
    }
  },
  onLoad(){
    this.tabList({
      parentId:0     
    }),
    this.tabDetail();
    this.botdetail({
      pageIndex:this.parentId
    })
  },
  onReachBottom(){
    this.pareId(++this.parentId)
    this.botdetail({
      pageIndex:++this.parentId
    })
  },
  created(){
    
  },
  mounted(){
   
  }
}
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
}
.topSearch{
  width: 95%;
  height: 30px;
  margin-left: 2.5%;
  background: rgb(246, 246, 246);
  color: rgb(170, 170, 170);
  border-radius: 5px;
  font-size: 15px;
}
.topSearch input{
  padding-left: 10px;
}
.topbar{
  width: 100%;
  height: 30px;
  margin-top: 10px;
  padding-left: 1%;
}
.scroll-view_H{
  display: flex;
  white-space: nowrap;
}
.scroll-view_H li:first-child{
  border-bottom: 3px solid rgb(86, 210, 191);
  color: rgb(86, 210, 191);
}
.topbar li{
  height: 100%;
  font-size: 16px;
  line-height: 30px;
  display: inline-block; 
  margin-left: 15px;
}
.swiperTab{
  width: 98%;
  height: 150px;
  margin-top: 10px;
}
.swiperTab img{
  margin-left: 1%;
  width: 100%;
}
.ThressImg{
  width: 98%;
  margin-left: 1%;
  display: flex;
  margin-top: 20px;
}
.left{
  flex: 4;
  overflow: hidden;
}
.right{
  display: flex;
  flex-direction: column;
  flex: 6;
  flex-wrap: wrap;
  overflow: hidden;
  margin-left: 5px;
}
.right img:nth-child(2) {
  margin-top: 5px;
}
.content{
  margin-top: 10px;
}
.every img{
  width: 98%;
  margin-left: 1%;
  height: 100px;
  border-radius: 15px;
}
.con{
  width: 98%;
  margin-left: 1%;
  height: 340px;
  display: flex;
  flex-wrap: wrap;
}
.tit{
  width: 98%;
  margin-left: 1%;
  margin-top: 10px;
  position: relative;
  
}
.tit span:nth-child(1){
  font-size: 18px;
}
.tit span:nth-child(2){
  margin-left: 10px;
}
.tit span:nth-child(3){
  position: absolute;
  right: 5px;
  color: rgb(252, 93, 123);
}
.eve{
  margin-top: 10px;
  width: 33%;
  height: 50%;
}
.eve p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.eve span{
  color: rgb(252, 93, 123);
}
.contentBot{
  width: 98%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
}
.botCon{
  margin-top: 10px;
}
.botEve{
  height: 120px;
  display: flex;
  margin-top: 10px;
}
.botLeft img{
  width: 110px;
  height: 110px;
}
.botRight{
  margin-left: 10px;
}
.botRight p{
  font-size: 15px;
}
.block{
  border: 1px solid red;
  color: rgb(252, 93, 123);
  font-size: 12px;
  padding: 2px;
  margin-left: 5px;
}
.none{
  display: none;
}
.botPrice{
  margin-top: 10px;
}
.botPrice span:nth-child(1){
  color: rgb(252, 93, 123);
  font-size: 20px;
}
.botPrice span:nth-child(2){
  color: rgb(168, 120, 49);
  font-size: 12px;
  margin-left: 5px;
}
.botPrice span:nth-child(4){
  background: rgb(255, 232, 237);
  color: rgb(252, 93, 123);
  font-size: 12px;
  margin-left: 5px;
}
.botPrice img{
  width: 25px;
  height: 10px;
}
</style>