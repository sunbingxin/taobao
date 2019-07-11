<template>
    <div class="box">
        <div>
            <div>
                <img src="/static/images/fail.png" alt="">
                <div>支付失败</div>
                <div>请在<span>28:28</span>内完成</div>
            </div>
            <div>
                <div>订单总计:</div>
                <div>￥{{price}}</div>
            </div>
            <div>
                <div>应付金额( 包邮费 ):</div>
                <div>￥{{price}}</div>
            </div>
     </div>

        <div>
            <div>
            <img src="/static/images/wx.svg" alt="">
            <div>微信支付</div>
            </div>
           <img src="/static/images/true2.png" alt="">
        </div>

         <div @click="gunindex">返回商城</div>
         <div class="gopayment">去付款</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price:"",
        }
    },
  onLoad(option){
      this.price=option===undefined?wx.getStorageSync('shop'):option.price
      wx.setStorageSync('shop',option);
  },
  methods: {
      gunindex(){
        wx.redirectTo({ url: '/pages/index/main'});
      }
  },
}
</script>

<style>
page,.box{
    width: 100%;
    height: 100%;
    background:#f3f7f7;
}
.box>div:nth-child(1){
    background: #fff;
}
.box>div:nth-child(1)>div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.box>div:nth-child(1)>div:nth-child(1) img{
    width:120rpx;
    height:120rpx;
    background:#fff;
    margin-top:68rpx;
    margin-bottom:26rpx;
}
.box>div:nth-child(1)>div:nth-child(1)>div:nth-child(2){
    font-size:40rpx;
   margin-top:6rpx;
}
.box>div:nth-child(1)>div:nth-child(1)>div:nth-child(3){
    margin-top:6rpx;
}
.box>div:nth-child(1)>div:nth-child(1)>div:nth-child(3)>span{
   color:#fc5d7b;
}
.box>div:nth-child(1)>div:nth-child(2),.box>div:nth-child(1)>div:nth-child(3){
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20rpx 10rpx;
    color:#999da2;
}
.box>div:nth-child(1)>div:nth-child(3)>div:nth-child(2){
  color:#fc5d7b;
}
.box>div:nth-child(2){
    margin-top: 25rpx;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 20rpx;
}
.box>div:nth-child(2)>div{
    display: flex;
}
.box>div:nth-child(2)>div:nth-child(2){
    margin-left: 10rpx;
}
.box>div:nth-child(2) img{
    width: 40rpx;
    height: 40rpx;
}
.box>div:nth-child(3){
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 150rpx;
    color:#5d9afc;
    font-size: 40rpx;
}
.gopayment{
    width: 100%;
    height: 110rpx;
    color: #fff;
    background:linear-gradient(217deg,#f86367,#fb2579);
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42rpx;
}
</style>
