<template>
    <div class="outbox">
        <div class="chagne_add_data">
            <div class="user_change_data">
                <input class="user_address_data" type="text" placeholder="收货人" @input="peo">
                <span class="user_address_right"><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <div class="user_change_data">
                <input class="user_address_data" type="text" placeholder="手机号码" @input="pho">
                <span class="user_address_right user_address_right2"><i>+ 86</i><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <view class="user_change_data">
                <picker 
                    @change="handleProxy"
                    class="_picker data-v-549b0e66"
                    custom-item="全部"
                    data-comkey="0"
                    data-eventid="3"
                    mode="region"
                    value="[1,0,0]"
                    aria-haspopup="true"
                    range="[[">
                   <view class="_view data-v-549b0e66 user_change_data">
                        <input 
                        bindinput="handleProxy"
                        class="_input data-v-549b0e66 user_address_data"
                        data-comkey="0"
                        data-eventid="2"
                        placeholder="所在地区"
                        type="text"
                        :value="list"
                        />
                    <label class="_span data-v-549b0e66 user_address_right">...</label>
                 </view>
               </picker>
            </view>
            <div class="user_change_data user_textarea">
                <textarea placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等" @input="checkout"></textarea>
            </div>
        </div>
        <div class="user_data_title">
            <div class="user_title_type">
                <p class="title_type_tit">标签</p>
                <div class="user_every_type">
                    <span v-for="(item,index) in data" :key="index" :class="ind === index?'border':'span'" @click="clickspan(item,index)">{{item}}</span>
                </div>
            </div>
            <div class="user_default_address">
                <p class="set_default_address">设为默认地址</p>
                <switch 
                    @tap="handleProxys"
                    class="_switch data-v-549b0e66"
                    color="rgba(51,214,197,1)"
                    data-comkey="0"
                    data-eventid="6"
                    name="switch"
                    role="checkbox"
                    aria-disabled="false"
                    aria-checked="true">
                </switch>
            </div>
        </div>
        <button class="submit" @click="clickyes">保存</button>
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
          people:'',
          phone:'',
          address:'',
          list:'',
          data:['家','公司','学校','其他'],
          ind:'',
          item:'',
          open:1,
          code:'',
          lists:''
        }
    },
    computed:{
      ...mapState({
        address:(state)=>{return state.cheap.address}
      })
    },
    methods:{
      ...mapActions({
        addres:'cheap/addres'
      }),
      peo(e){
        this.people = e.target.value
        console.log(this.people)
      }, 
      pho(e){
        this.phone = e.target.value
      },
      handleProxy(e){
        this.code = e.target.code
        this.list = e.target.value[0] +'  '+ e.target.value[1]+'  ' + e.target.value[2]
        this.lists = e.target.value
      }, 
      handleProxys(e){
        if(this.open === 0){
          this.open = 1
        }else{
          this.open = 0
        }
      }, 
      checkout(e){
        this.address = e.target.value
      },
      clickspan(item,index){
        this.ind = index
        this.item = item
      },
      clickyes(){
        if(!this.people){
          wx.showToast({
            title: '请输入收货人!'
          })
        }else if( !/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.phone)){
          wx.showToast({
            title: '请输入正确号码!'
          })
        }else if(!this.list){
          wx.showToast({
            title: '请输入地址!'
          })
        }else if(!this.address){
          wx.showToast({
            title: '请输入详细地址!'
          })
        }else if(!this.ind){
          wx.showToast({
            title: '请输入地址类型!'
          })
        }else{
          console.log(this.people,this.phone,this.list,this.address,this.address,this.ind+1,this.open)
          this.addres({
            people:this.people,
            phone:this.phone,
            lists:this.lists,
            address:this.address,
            ind:this.ind+1,
            open:this.open,
            provinceId:this.code[0],
            cityId:this.code[1],
            areaId:this.code[2]
          })
          
        }
      }    
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.border{
    width: 66px;
    height: 26px;
    border-radius:150px;
    margin: 1px 7px;
    font-size:15px;
    line-height: 26px;
    text-align: center;
    border:1px solid skyblue;
    color:skyblue;
}
    .outbox{
    width: 100%;
    height: 100%;
    background:rgba(243,247,247,1);
    font-family: 'PingFangSC-Regular';
}
.chagne_add_data{  /* 705.9rpx */
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 10px;
}
.user_change_data{
    width: 351px;
    height: 45px;
    margin: 0 auto;
    display: flex;
    line-height: 45px;
    border-bottom: 1px solid #F6F6F6;
    font-size: 14px;
}
.user_address_data{
    flex: 1;
    height: 45px;
    padding-left: 5px;
    width: 100%;
}
.user_address_right{
    display: inline-block;
    color: #9CA0A5;
}
.user_address_right img{
    width:5px;
    height:9px;
}
.user_address_right2{
    display: flex;
    align-items: center;
    color: #9CA0A5;
}
.user_address_right2 i{
    margin-right: 10px;
}
picker{
    width: 351px;
    margin: 0 auto;
}
.picker{
    width: 100%;
}
.user_textarea{
    height: 88px;
    font-weight:400;
    line-height: 20px;
    font-size: 14px;
    border-bottom: 0;
}
.user_textarea textarea{
    width: 308px;
    height: 88px;
    margin: 13px 5px;
}
.user_data_title{
    width: 100%;
    height: 143px;
    background: #fff;
}
.user_title_type{
    width: 351px;
    margin: 0 auto;
    border-bottom: 1px solid #F6F6F6;
}
.title_type_tit{
    font-size:14px;
    font-weight:400;
    color:rgba(50,58,69,1);
    margin-left: 5px;
    height: 31px;
    line-height: 31px;
}
.user_every_type{
    width: 351px;
    height: 67px;
    margin: 0 auto;
    display: flex;
}
.span{
    width: 66px;
    height: 26px;
    border-radius:150px;
    margin: 1px 7px;
    border:1px solid rgba(187,187,187,1);
    font-size:15px;
    line-height: 26px;
    text-align: center;
    color:rgba(50,58,69,1);
}
.user_every_type span.type_active{
    background:rgba(51,214,197,1);
    color:#fff;
    border:1px solid rgba(51,214,197,1);
}
.user_default_address{
    display: flex;
    width: 351px;
    margin: 0 auto;
    height: 45px;
    line-height: 45px;
    font-size:14px;
}
.set_default_address{
    margin-left: 5px;
    flex: 1;
}

.holdAddress{
  width: 100%;
  height: 100%;
}
.addressMask{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  background:rgb(165, 164, 164);
  .box{
    width: 100%;
    height:397px;
    background:#fff;
    position: absolute;
    left:0;
    bottom: 0;
    .search{
      width: 44px;
      height:44px;
      line-height:44px;
      text-align: center;
      border-bottom:2px solid rgba(252, 93, 123, 1);
      position: absolute;
      top:52px;
      left:80px;
      font-size:14px;
      color:rgba(252, 93, 123, 1);
    }
    p{
      width: 100%;
      height:52px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 11px;
      box-sizing: border-box;
      span{
        font-size:14px;
        color:rgba(72, 72, 72, 1);
      }
      .close{
        font-size:20px;
        width:15px;
        height:15px;
        line-height:15px;
        color:rgba(72, 72, 72, 1);
        overflow: hidden;
      }
    }
    ul{
      width: 100%;
      li{
        width: 100%;
        height:44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:14px;
        color:rgba(50, 58, 69, 1);
        padding-left:14px;
        padding-right:17px;
        box-sizing: border-box;
        span{
          img{
            width: 14px;
            height:9px;
          }
        }
      }
      .color{
        color:rgba(252, 93, 123, 1);
      }
    }
  }
}
.show{
  display: block;
}
.hide{
  display: none;
}
.holdAddressChild{
  width: 100%;
  height:44px;
  line-height: 44px;
}
.submit {
  width: 90%;
  height: 50px;
  background: rgba(51, 214, 197, 1);
  border-radius: 7px;
  color: #ffffff;
  font-size: 18px;
  margin-left:5%;
  margin-top: 60px;
}

</style>

