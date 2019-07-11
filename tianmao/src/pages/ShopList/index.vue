<template>
  <div class="box">
    <div class="topTab">
        <div v-for="(item,index) in list" :key="index">
            <span :class="ind === index ? 'active' : ''" @click="tab(index)">{{item}}</span>
        </div>
    </div>
    <div v-if="!myord" class="disNone">
        <img src="../../../static/images/wudingdan.png" alt="">
        <span>暂时没有订单奥~</span>
    </div>
    <div v-else class="con">
        <div class="conEve" v-for="(item,index) in myord" :key="index">
            <div class="conEveTop">
                <span>{{item.createTime}}</span>
                <span>{{item.processStatus === 1? '待付款' : '已取消'}}</span>
            </div>
            <div class="conEveZhong" @click="detJump(item.products[0].pid)">
                <div class="zhongLeft">
                    <img :src="item.products[0].mainImgUrl" alt="">
                </div>
                <div class="zhongRight">
                    <span>{{item.products[0].productTitle}}</span>
                    <span>规格:{{item.products[0].skuName}}</span>
                    <div class="zRightCon">
                        <span>￥{{item.products[0].salesPrice}}</span>
                        <span>x{{item.products[0].productNumber}}</span>
                    </div>
                </div>
            </div>
            <div class="bottomCon">
                <div></div>
                <div>
                    <div class="botInfo">
                        <span>共{{item.products[0].productNumber}}件商品</span>
                        <span>合计:￥{{item.products[0].salesPrice}}</span>
                    </div>
                    <div class="btnCon" v-if="item.processStatus === 1">
                        <span @click="orderDel(item.orderId)">取消订单</span>
                        <span>去付款{{item.products[0].salesPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        ind:1,
        list:['全部','待付款','待发货','待收货']
    }
  },
  computed:{
     ...mapState({
      myord: state => state.my.myOrder,
    })
  },
  methods:{
    ...mapActions({
        Order:'my/MyOrder',
        qxOrder:'my/orderDe'
    }),
    tab(ind){
        this.ind = ind,
        this.Order({
          pageIndex: 1,
          orderStatus: this.ind
      })
    },
    orderDel(id){
        wx.showModal({
            title: '温馨提示',
            content: '是否取消订单',
            success:(res) => {
                if (res.confirm) {
                    this.qxOrder({
                        orderNumber:id,
                        orderid:this.ind
                    })
                } else if (res.cancel) {

                }
            }
        })
        
    },
    detJump(pid){
       wx.navigateTo({
        url:'/pages/detail/main?id=' + pid
      })
    }
  },
  onShow(){
    
  },
  onLoad(e){
      this.ind = e.index * 1;
      this.Order({
          pageIndex: 1,
          orderStatus: this.ind
      })
      console.log(this.ind)
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
    background: rgb(243, 247, 247)
}
.topTab{
    width: 100%;
    height: 35px;
    display: flex;
    background: white;
}
.topTab div{
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
}
.topTab span{
    display: inline-block;
    height: 35px;
    font-size: 15px;
}
.active{
    border-bottom:3px solid rgb(86, 210, 191);
}
.disNone{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.disNone img{
    width: 150px;
    height: 150px;
    margin-left: 125px;
    margin-top: 150px;
}
.disNone span{
    color: #ccc;
}
.con{
    width: 100%;
    background: rgb(243, 247, 247)
}
.conEve{
    width: 95%;
    margin-left: 2.5%;
    height: 240px;
    border-radius: 5px;
    background: white;
    margin-top: 10px;
    font-size: 15px;
}
.conEveTop{
    height: 40px;
    justify-content: space-between;
    display: flex;
}
.conEveTop span:nth-child(1){
    padding-top: 5px;
    padding-left: 5px;
}
.conEveTop span:nth-child(2){
    padding-top: 5px;
    padding-right: 5px;
}
.conEveZhong{
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
}
.conEveZhong img{
    width: 85px;
    height: 85px;
}
.zhongRight{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}
.zhongRight span{
    width: 100%;
    display: inline-block;
    margin-top: 1px;
}
.zhongRight>span:nth-child(2){
    width: 100%;
    color: #ccc;
    display: inline-block;
}
.zRightCon{
    width: 100%;
    display: flex;
    position: relative;
    font-size: 13px;
}
.zRightCon span:nth-child(2){
    position: absolute;
    left: 90%;
}
.bottomCon{
    width: 100%;
    height: 100px;
    display: flex;
}
.bottomCon div{
    flex: 1;
}
.botInfo{
    padding-top: 10px;
    padding-left: 10px;
}
.btnCon{
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
}
.btnCon span{
    width: 65px;
    height: 25px;
}
.btnCon span:nth-child(1){
    height: 25px;
    border: 1px solid #e6e6e6;
    background: white;
    color: black;
    border-radius: 5px;
    line-height: 25px;
    padding:3px 5px;
    text-align: center;
}
.btnCon span:nth-child(2){
    height: 25px;
    border: 1px solid rgb(252, 93, 123);
    background: rgb(252, 93, 123);
    color: white;
    border-radius: 5px;
    line-height: 25px;
    margin-left: 5px;
    padding:3px 5px;
    text-align: center;
}
</style>