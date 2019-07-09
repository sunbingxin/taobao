<template>
    <div>购物车页</div>
</template>

<script>
import {mapState} from "vuex"
export default {
 computed: {
   ...mapState({
       getShop:state=>{
           console.log(state.detail.getShop);
       }
   })
 },
}
</script>

<style>

</style>
