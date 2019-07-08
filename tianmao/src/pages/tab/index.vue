<template>
  <div class="warp">
      <scroll-view class="warp-top" scroll-x>
        <li>今日推荐</li>
        <li v-for="(item,key) in data" :key="key" @click="clickli(item.cid,item.childs)" :class="item.cid===id?'border':null">{{item.cname}}</li>
      </scroll-view>
      <div class="warp-content">
        <div class="content-top">
          <dl v-for="(item,key) in child" :key="key" @click="clickli(item.cid,item.childs)">
            <dt>
              <img :src="item.imgUrl" alt="">
            </dt>
            <dd>{{item.cname}}</dd>
          </dl>
        </div>
        <div class="content-bottom">
          <div class="bac"></div>
          <div class="bottom-top">
            <div @click="clickarr('综合')">综合</div>
            <div @click="clickarr('最新')">最新</div>
            <div @click="clickarr('价格')">价格{{i === 0?'👆':'👇'}}</div>
          </div>
          <div class="bottom-bo">
            <div class="shops" v-for="(item,index) in shops" :key="index">
              <div class="shops-img">
                <img :src="item.mainImgUrl" alt="">
              </div>
              <div class="title">{{item.title}}</div>
              <span class="yes">包税</span>
              <div class="money">￥{{item.vipPrice}}</div>
              <div class="moneys">
                <div>￥{{item.supplyPrice}}</div>
                <div>赚{{item.memberDiscountPrice}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  props:{

  },
  data(){
    return {
      data:[],
      id:1,
      child:[],
      Index:1,
      shops:[],
      i:0,
      sortType:1,
      open:true
    }
  },
  created(){
     
  },
  onLoad(option){
    if(option.cid){
      this.id = option.cid
    }
  },
  onShow(){
    this.tab()
    this.shop({cid:this.id,sortType:this.sortType,pageIndex:this.Index})
    setTimeout(()=>{
      this.data = this.tablist
      this.shops = this.shopdata
      this.tablist.forEach(item=>{
        if(item.cid === this.id){
          this.child = item.childs
      }
      })
      console.log(this.data,this.child)
    },1000)
  },
  components:{
 
  },
  
  computed:{
    ...mapState({
      tablist:(state)=>{return state.tab.tablist},
      shopdata:(state)=>{return state.tab.shopdata}
    })
  },
  onReachBottom(){
    ++this.Index
    if(this.open){
      this.shop({cid:this.id,sortType:this.sortType,pageIndex:this.Index})
      setTimeout(()=>{
        if(this.shopdata){
          this.shopdata.forEach(item=>{
            this.shops.push(item)
          })
        }else{
          this.open = false
        }
        
      },1000)
    }else{
      wx.showToast({
        title: '暂无数据!',
        icon: 'error',
        duration: 2000
      })
    }
    
  },
  methods:{
    ...mapActions({
       tab:'tab/tab',
       shop:'tab/shop'
    }),
    clickarr(obj){
      this.sortType = 1
      if(obj === '综合'){
        this.shops = []
         this.shop({cid:this.id,sortType:this.sortType,pageIndex:this.Index})
          setTimeout(()=>{
            this.shopdata.forEach(item=>{
              this.shops.push(item)
            })
          },1000)
      }else if(obj === '最新'){
        this.sortType = 2
        this.shops = []
         this.shop({cid:this.id,sortType:this.sortType,pageIndex:this.Index})
          setTimeout(()=>{
            this.shopdata.forEach(item=>{
              this.shops.push(item)
            })
          },1000)
      }else{
        this.i = this.i
        if(this.i === 0){
          this.sortType = 4
          this.i = 1;
          this.shops = []
         this.shop({cid:this.id,sortType:this.sortType,pageIndex:this.Index})
          setTimeout(()=>{
            this.shopdata.forEach(item=>{
              this.shops.push(item)
            })
          },1000)
        }else{
          this.sortType = 3
          this.i = 0;
          this.shops = []
         this.shop({cid:this.id,sortType:this.sortType,pageIndex:this.Index})
          setTimeout(()=>{
            this.shopdata.forEach(item=>{
              this.shops.push(item)
            })
          },1000)
        }
      }
    },
    clickli(cid,child){
      if(child){
        this.id = cid
      }
      this.shop({cid:cid,sortType:1,pageIndex:this.Index})
      setTimeout(()=>{this.shops = this.shopdata},1000)
      this.tablist.forEach(item=>{
        if(item.cid === this.id){
          this.child = item.childs
        }
      })
    }
  }
}
</script>
<style scoped lang="">
  page{
    width:100%;
    height:100%;
  }
  .warp{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
  .warp-top{
    width:100%;
    height:50px;
    line-height:50px;
    display: flex;
    white-space: nowrap;
  }
  .bac{
    width:100%;
    height:10px;
    background:#f2f2f2;
  }
  .border{
    border-bottom: 10px solid skyblue;
    color:skyblue;
  }
  .warp-top li{
    text-align: center;
    width: 100px;
    height: 50px;
    display: inline-block;
  }
  .content-top{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .content-top>dl{
    width: 25%;
    height: 100px;
    display: flex;
    flex-direction: column;
  }
  .content-top>dl>dt{
    width: 100%;
    height: 70px;
  }
  .content-top>dl>dt>img{
    width: 70%;
    height: 70px;
    margin-left: 15%;
  }
  .content-top>dl>dd{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .content-bottom{
    width: 100%;
    height: auto;
    background: #f2f2f2;
  }
  .bottom-top{
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .bottom-top>div{
    flex:1;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
  .bottom-bo{
    margin-top: 5px;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .shops{
    width: 40%;
    height: 200px;
    margin: 5px 5px;
    background: #fff;
    padding: 13px;
  }
  .shops-img{
    width: 100%;
    height: 120px;
  } 
  .shops-img>img{
    width: 80%;
    height: 80%;
    margin: 10%;
  }
  .money{
    width: 100%;
    height: 20px;
    color:red;
  }
  .title{
    width: 100%;
    height: 20px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .yes{
    height: 15px;
    display: inline-block;
    font-size: 14px;
    line-height: 15px;
    border: 1px solid red;
    color:red;
  }
  .moneys{
    width: 100%;
    height: 15px;
    display: flex;
    font-size: 12px;
  }
  .moneys>div{
    width: 30%;
  }
</style>