<template>
    <div class="outbox">
        <div class="chagne_add_data">
            <div class="user_change_data">
                <input class="user_address_data" type="text" placeholder="收货人">
                <span class="user_address_right"><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <div class="user_change_data">
                <input class="user_address_data" type="text" placeholder="手机号码">
                <span class="user_address_right user_address_right2"><i>+ 86</i><img src="/static/images/lt.svg" alt=""></span>
            </div>
            <view class="user_change_data">
                <picker 
                    bindchange="handleProxy"
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
                        >...</input>
                    <label class="_span data-v-549b0e66 user_address_right">...</label>
                 </view>
               </picker>
            </view>
            <div class="user_change_data user_textarea">
                <textarea placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等"></textarea>
            </div>
        </div>
        <div class="user_data_title">
            <div class="user_title_type">
                <p class="title_type_tit">标签</p>
                <div class="user_every_type">
                    <span>9784651</span>
                </div>
            </div>
            <div class="user_default_address">
                <p class="set_default_address">设为默认地址</p>
                <switch 
                    bindtap="handleProxy"
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
        <button class="submit">保存</button>
    </div>

</template>
<script>
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

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
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
.user_every_type span{
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