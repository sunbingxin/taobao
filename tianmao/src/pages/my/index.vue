<template>
  <div class="box">
      <div class="top">
        <img src="../../../static/images/logBg.png" alt="">
        <div class="leftImg">
          <img :src="Info.headUrl" alt="">
        </div>
        <div class="RightTit">
          <span>{{Info.nickName}}</span><br>
          <span>邀请码:{{Info.inviteCode}}</span>
          <span>复制</span>
        </div>
      </div>
      <div class="myDing">
        <span>我的订单</span>
        <div class="tab">
          <div class="eve">
            <div class="con" @click="shopList(1)">
              <img src="../../../static/images/dfk.png" alt="">
              <span>待付款</span>
            </div>
          </div>
          <div class="eve">
            <div class="con" @click="shopList(2)">
              <img src="../../../static/images/dfh.png" alt="">
              <span>待发货</span>
            </div>
          </div>
          <div class="eve">
            <div class="con" @click="shopList(3)">
              <img src="../../../static/images/dsh.png" alt="">
              <span>待收货</span>
            </div>
          </div>
        </div>
      </div>
      <div class="botCon">
        <div class="botEve" @click="clickcheap" >
          <img src="../../../static/images/yhj.png" alt="">
          <span>我的优惠券</span>
          <span>></span>
        </div>
        <div class="botEve" @click="clickaddress" >
          <img src="../../../static/images/dz.png" alt="">
          <span>收货地址</span>
          <span>></span>
        </div>
        <div class="botEve" @click="clicknpc" >
          <img src="../../../static/images/kf.png" alt="">
          <span>联系客服</span>
          <span>></span>
        </div>
        <div class="botEve" @click="clickfile" >
          <img src="../../../static/images/sm.png" alt="">
          <span>实名认证</span>
          <span>></span>
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

    }
  },
  computed:{
    ...mapState({
      Info: state => state.my.myInfo,
    })
  },
  methods:{
    ...mapActions({
      myInfo:'my/MysInfo'
    }),
    clickaddress(){
      wx.navigateTo({
        url:'/pages/btn/main'
      })
    },
    clickcheap(){
      wx.navigateTo({
        url:'/pages/cheap/main'
      })
    },
    clickfile(){
      wx.navigateTo({
        url:'/pages/file/main'
      })
    },
    clicknpc(){
      wx.navigateTo({
        url:'/pages/npc/main'
      })
    },
    shopList(ind){
      wx.navigateTo({
        url: '/pages/ShopList/main?index=' + ind,
      });
    }
  },
  onShow(){
    this.myInfo()
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
  position: relative;
  background: rgb(243, 247, 247);
}
.top{
  width: 100%;
  height: 90px;
  overflow: hidden;
  position: relative;
}
.top img{
  width: 100%;
  height: 100px;
}
.leftImg{
  position: absolute;
  left: 7px;
  top: 7px;
}
.leftImg img{
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.RightTit{
  position: absolute;
  left: 100px;
  top: 10px;
}
.RightTit span:nth-child(1){
  font-size: 17px;
  color: white;
}
.RightTit span:nth-child(3){
  margin-top: 10px;
  font-size: 15px;
  color: white;
  display: inline-block;
}
.RightTit span:nth-child(4){
  margin-top: 10px;
  display: inline-block;
  border: 1px solid rgb(55, 208, 213);
  color: white;
  background: rgb(55, 208, 213);
  font-size: 12px;
  margin-left: 5px;
}
.myDing{
  width: 96%;
  height: 120px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 80px;
  left: 2%;
}
.myDing>span{
  font-size: 17px;
  margin-top: 5px;
  margin-left: 5px;
}
.tab{
  width: 100%;
  display: flex;
}
.eve{
  width: 33%;
  text-align: center;
  margin-top: 10px;
}
.con{
  width: 50px;
  height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.con img{
  width: 42px;
  height: 42px;
  display: inline-block;
  margin-left: 30px;
}
.con span{
  width: 50px;
  height: 30px;
  font-size: 12px;
  margin-left: 27px;
  display: inline-block;
  text-align: center;
}
.botCon{
  width: 98%;
  height: 200px;
  margin-left: 1%;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
  position: absolute;
  top: 200px;
}
.botEve{
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
  position: relative;
}
.botEve img{
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-left: 10px;
}
.botEve span:nth-child(2){
  margin-left: 10px;
  font-size: 14px;
}
.botEve span:nth-child(3){
  position: absolute;
  color: #ccc;

  right: 10px;
}

</style>