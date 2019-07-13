<template>
    <div class="box">
        <div class="head" @click="address">
          <div>
            <div>
                <div>{{getShop.mainOrder.consignee}}</div>
                <div>{{getShop.mainOrder.consigneePhone}}</div>
            </div>
            <div>
                <div>
                  <img src="/static/images/locationIcon.png" alt="">
                  <div>{{getShop.mainOrder.addressDetail}}</div>
                </div> 
                <img src="/static/images/jt.png" alt="">
            </div>
            <div class="postionBot">
                <div v-for="(item,index) in 30" :key="index"></div>
            </div>
          </div>
        </div>
        <div class="cetner">
            <div>
                <img :src="getShop.subOrder[0].orderItemProductInfos[0].mainImgUrl" alt="">
                <div>
                    <div>{{getShop.subOrder[0].orderItemProductInfos[0].productTitle}}</div>
                    <div>规格:{{getShop.subOrder[0].orderItemProductInfos[0].skuName}}</div>
                    <div>
                        <div>￥{{getShop.mainOrder.orderAmount/getShop.mainOrder.orderChannel}}</div>
                        <div>X{{getShop.mainOrder.orderChannel}}</div>
                    </div>
                </div>
            </div>
            <div>
                <div>发货方式</div>
                <div>快递 ( 包邮 ) : 0元</div>
            </div>
            <div>
                <div>订单总计</div>
                <div>￥<span class="active">{{getShop.mainOrder.orderAmount}}</span></div>
            </div>
            <div>
                <div>优惠卷</div>
                <img src="/static/images/jt.png" alt="">
            </div>
            <div>
                <div>
                    <img src="/static/images/wx.svg" alt="">
                    <div>微信支付</div>
                </div>
                 <img src="/static/images/true2.png" alt="">
            </div>
        </div>
        <div class="foot">
            <div>总计:￥<div>{{getShop.mainOrder.orderAmount}}</div></div>
            <div>
                <div>微信支付</div>
                <div @click="buyShop" >去支付</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
 computed: {
   ...mapState({
       getShop:state=>{
           console.log(state.detail.getShop);
           return state.detail.getShop
       }
   })
 },
 methods: {
     ...mapActions({
         buyShopping:"shopcar/buyShop"
     }),
     buyShop(){
         this.buyShopping({"payChannel": 1,"prepareId": this.getShop.prepareId,"platform":4}).then(res=>{
             if(res.res_code===1){
            let that=this;
             wx.requestPayment({
                timeStamp: res.result.timeStamp,
                nonceStr:  res.result.nonceStr,
                package:  res.result.package,
                signType: 'MD5',
                paySign:`appId=${res.result.appId}`,
                success (res) { 
                    console.log(123123);
                },
                fail (res) {
                    wx.redirectTo({ url: `/pages/buyfail/main?price=${that.getShop.mainOrder.orderAmount}&number=${that.getShop.prepareId}&isok=2` });
                 }
            })
        }
         })
     },
     address(){
         wx.navigateTo({ url: '/pages/btn/main' });
     }
 },
}
</script>

<style>
.box,page{
    width: 100%;
    height: 100%;
  
}
.head{
    box-sizing: border-box;
    padding: 20rpx;
    width: 100%;
    background:#f3f7f7;
}
.head img{
    width: 28rpx;
    height: 28rpx;
}
.head>div{
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 50rpx;
}
.head>div>div:nth-child(1){
    font-size:32rpx;
    font-weight:700;
    margin-bottom:20rpx;
    display: flex;
    align-items: center;
    margin-top: 10rpx;
}
.head>div>div:nth-child(1)>div:nth-child(1){
    margin-right: 20rpx;
}
.head>div>div:nth-child(2){
    display: flex;
    justify-content:space-between;
    font-size:28rpx;
}
.head>div>div:nth-child(2)>div:nth-child(1){
    padding-right: 100rpx;
    display: flex;
}
.head>div>div:nth-child(2)>div:nth-child(1)>div{
    margin: -3rpx 0px 0px 10rpx;
}
.postionBot{
    position: absolute;
    bottom: -20rpx;
    width: 100%;
    display: flex;
}
.postionBot>div:nth-child(odd){
    display:inline-block;
    padding:0 10rpx;
    background:#fc5d7b;
    border:4rpx solid #fc5d7b;
    color:#333;
    transform:skew(-50deg);
    margin-right: 11rpx;
}
.postionBot>div:nth-child(even){
    display:inline-block;
    padding:0 10rpx;
    background:#5d9afc;
    border:4rpx solid #5d9afc;
    color:#333;
    transform:skew(-50deg);
    margin-right: 10rpx;
}
.cetner{
    box-sizing: border-box;
    margin-top: 26rpx;
    width: 100%; 
    padding: 10rpx;
}
.cetner>div:nth-child(1){
    display: flex;
}
.cetner>div:nth-child(1)>div{
    flex: 1;
    margin-top: 6rpx;
    font-size:28rpx;
}
.cetner>div:nth-child(1)>div>div:nth-child(2){
   margin: 10rpx 0;
   color:#999da2;
   font-size: 24rpx;
}
.cetner>div:nth-child(1)>div>div:nth-child(3){
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  color:#323a45;
  font-size: 24rpx;
}
.cetner>div:nth-child(1) img{
    width: 180rpx;
    height: 180rpx;
    box-sizing: border-box;
    padding:16rpx;
}
.cetner>div:nth-child(2),.cetner>div:nth-child(3),.cetner>div:nth-child(4),.cetner>div:nth-child(5){
    box-sizing: border-box;
    padding: 0px 10rpx;
    width: 100%;
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cetner>div:nth-child(3)>div:nth-child(2){
    color: #fb2579;
}
.cetner .active{
    font-size:48rpx;

}
.cetner>div:nth-child(5)>div:nth-child(1){
    display: flex;
}
.cetner>div:nth-child(5)>div:nth-child(1)>div{
    margin-left: 20rpx;
}
.cetner>div img{
    width: 40rpx;
    height: 40rpx;
}
.foot{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    border-top:2rpx solid #ccc;
    width: 100%;
    height:110rpx;
    align-items: center;
}
.foot>div:nth-child(1){
   font-size:28rpx;
   color:#fc5d7b;
   display: flex;
   margin-left: 10rpx;
   align-items: center;
   height:110rpx;
}
.foot>div:nth-child(1)>div{
    margin-left: 6rpx;
    font-size:60rpx;
    margin-top: -16rpx;
}
.foot>div:nth-child(2){
    display: flex;
    height:110rpx;
}
.foot>div:nth-child(2)>div:nth-child(1){
  color:#323a45;
  font-size:28rpx;
  height: 110rpx;
  line-height: 110rpx;
  margin-right: 15rpx;
}
.foot>div:nth-child(2)>div:nth-child(2){
    height: 110rpx;
    font-size:36rpx;
    text-align:center;
    line-height: 110rpx;
    color:#fff;
    background:linear-gradient(217deg,#f86367,#fb2579);
    width: 250rpx;
}
</style>
