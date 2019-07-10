<template>
  <div class="warp">
      <div class="warp-top">
          <div v-for="(item,index) in data" @click="clicknav(index)" :key="index" :class="index === i?'action':null">{{item}}</div>
      </div>
      <div class="warp-bottom">
          <div class="imgs">
              <img src="../../../static/images/暂无.png" alt="">
          </div>
          <div class="not" v-if="!cheap.result">暂无优惠卷可以使用哦~</div>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        data:['未领取','已使用','全部'],
        i:0
    }
  },
  computed:{
      ...mapState({
        list:(state)=>{return state.cheap.cheap}
      })
  },
  methods:{
      ...mapActions({
          cheap:'cheap/cheaps'
      }),
      clicknav(i){
          this.i = i;
      }
  },
  onShow(){
      this.cheap()
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
    page{
        width: 100%;
        height: 100%;
    }
    .warp{
        width: 100%;
        height:100%;
        background: #f0f7f7;
    }
    .warp-top{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
    .warp-top>div{
        flex:1;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .warp-bottom{
        width: 100%;
    }
    .action{
        border-bottom:3px solid skyblue;
        color:skyblue;
    }
    .imgs{
        width: 100%;
        height: 200px;
    }
    .imgs>img{
        width: 30%;
        height: 150px;
        margin-left: 35%;
        margin-top: 15%;
    }
    .not{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color:#aaa;
    }
</style>