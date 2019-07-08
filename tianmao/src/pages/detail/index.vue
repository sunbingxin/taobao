<template>
    <div>
        <!-- <swiper indicator-dots autoplay circular class="swiperView">
            <block v-for="(item,index) in getAll.getImg" :key="index">
                <swiper-item>
                    <img :src="item.imgUrl"/>
                </swiper-item>
            </block>
        </swiper> -->
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    computed: {
        ...mapState({
            getSwiper:state=>{
                //imgUrl  getDefault supplierProductPictureVoList
                console.log(state.detail.getAll.getDetail)
                return state.detail.getAll
            }
        })
    },
 onLoad(option){
     this.addDetail({pid:option.id})
 },
 methods: {
     ...mapActions({
         addDetail:"detail/addDetail"
     })
 },
}
</script>

<style>
.swiperView{
    width:100vw;
    height:100vw;
}
.swiperView img{
    width: 100%;
    height: 100%;
}
</style>
