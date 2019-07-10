<template>
  <div class="warp">
      <div class="warp-top">
          <div class="warp-input bor">
            <div>真实姓名</div>
            <input :value="name" @input="change1"/>
          </div>
          <div class="warp-input">
            <div>身份证号</div>
            <input :value="num" @input="change2"/>
          </div>
      </div>
       <div class="warp-bottom">
           <div class="flex">
               <div>上传身份证照片</div>
               <div class="col">(图片最多不超过5M)</div>
           </div>
           <div class="flex-img">
               <div @click="clickimg('1')">
                   <img v-if="!srcs" :src="phone.idFrontImgUrl" alt="">
                   <img v-else :src="srcs" alt="">
               </div>
               <div @click="clickimg('2')">
                   <img v-if="!src" :src="phone.idReverseImgUrl" alt="">
                   <img v-else :src="src" alt="">
                </div>
           </div>
           <div class="content">
               <h3>为什么需要实名认证?</h3>
               <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。</div>
               <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。</div>
           </div>
           <button class="btn" @click="clickbtn">保存</button>
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
        srcs:'',
        src:'',
        name:'',
        num:''
    }
  },
  computed:{
      ...mapState({
          phone:(state)=>{return state.cheap.phone}
      }),
      
  },
  methods:{
    ...mapActions({
        phones:'cheap/phones',
        add:'cheap/addphone'
    }),
    change1(e){
        this.name = e.target.value
        
    },
    change2(e){
        this.num = e.target.value
    },
    clickbtn(){
        console.log(this.name,this.num)
        this.add({trueName:this.name,idNumber:this.num,idFrontImgUrl:this.srcs,idReverseImgUrl:this.src})
    },
    clickimg(i){
        if(i === '1'){
            wx.chooseImage({
                success:(res)=>{
                    this.srcs = res.tempFilePaths[0]
                    console.log(this.srcs)
                }
            })
        }else{
            wx.chooseImage({
                success:(res)=>{
                    this.src = res.tempFilePaths[0]
                    console.log(this.src)

                }
            })
        }
        
    }
  },
  onShow(){
      this.phones()
      setTimeout(()=>{
          this.name = this.phone.trueName
          this.num = this.phone.idNumber 
      },500)
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
    height: 100%;
    background: #f2f2f2;
}
.col{
    color:#aaa;
}
.warp-top{
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.warp-input{
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    
}
.bor{
    border-bottom: 1px solid #f2f2f2;
}
.warp-input>div{
    width: 30%;
    text-align: center;
    font-weight: 600;
}
.warp-input>input{
    width:70%;
    height: 100%;
}
.warp-bottom{
    width: 100%;
    height: 100%;
    background: #fff;
    margin-top: 10px;
}
.flex{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}
.flex>div{
    margin: 0 2.5%;
}
.flex-img{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
}
.flex-img>div{
    width: 45%;
    height: 150px;
    border: 1px solid #f2f2f2;
    margin: 0 2.5%;
}
.flex-img>div>img{
    width: 100%;
    height: 100%;
}
.content{
    width: 100%;
    height:auto;
}
.content>h3{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
}
.content>div{
    width: 85%;
    font-size: 16px;
    color:#aaa;
    line-height: 30px;
    padding-top: 10px;
    margin: 0 auto;
}
.btn{
    width: 85%;
    height: 40px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #64e1d3;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    border:0;
}
</style>