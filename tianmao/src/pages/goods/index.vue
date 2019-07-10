<template>
    <div class="bindBox">
        <!-- <button>新增收货地址</button> -->
    <button 
    bindtap="handleProxy"
    class="addbtn"
    data-comkey="0"
    data-eventid="2"
    role="button"
    aria-disabled="false"
    @click="goAddress"
    >新增收货地址</button>

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
        goAddress(){
           wx.navigateTo({url: './redactAddress/main'})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    .bindBox{
       width: 100%;
        height: 100%;
        background: #f3f7f7;
        border: 2rpx solid transparent;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    .addbtn{
        margin: 0 auto;
        border: none;
        margin-top: 120rpx;
        margin-bottom: 120rpx;
        background: #33d6c5;
        color: #fff;
        font-size: 36rpx;
        width: 702rpx;
        border-radius: 14rpx;
        height: 100rpx;

    }
</style>