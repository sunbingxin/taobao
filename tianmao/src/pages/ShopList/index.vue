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
        Order:'my/MyOrder'
    }),
    tab(ind){
        this.ind = ind,
        this.Order({
          pageIndex: 1,
          orderStatus: this.ind
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
    height: 25px;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
}
.topTab div{
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
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
</style>