<template>
  <div class="wrapper">
    <!-- header -->
    <header>
      <div class="search">
        <div class="search-bg">
          <img src="/static/seek/search.png" alt="">
          <div class="search-input">
            <input type="text" placeholder="搜索" v-model="productName" @confirm="enters" />
          </div>
        </div>
        <div class="search-text" @touchend='cancel'>
          取消
        </div>
      </div>
    </header>
    <History v-if='isShow.isHistory' :callback='callback' />
    <Without v-if='isShow.isWithout' />
    <Detail v-if='isShow.isDetail' :list='list' :productNames='productName'/>
  </div>
</template>
<script>
import Without from "@/components/seek/without";
import History from "@/components/seek/history";
import Detail from "@/components/seek/detali.vue";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      productName: ""
    };
  },
  watch: {
    productName: function(val) {
      if (!val) {
        this.updateState({
          isShow: {
            isDetail: true,
            isWithout: false,
            isHistory:true
          }
        });
      }
    }
  },
  components: {
    History,
    Without,
    Detail
  },
  computed: {
    // vuex中属性
    ...mapState({
      productName: state => state.seek.productName,
      list: state => state.seek.list,
      isShow: state => state.seek.isShow
    })
  },
  onShow() {
    this.updateState({
      isShow: {
        isDetail: true,
        isWithout: false,
        isHistory: false
      }
    });
  },
  methods: {
    // vuex中的方法
    ...mapMutations({
      updateState: "seek/updateState",
      // abd: "seek/abd"
    }),
    ...mapActions({
      getSeekList: "seek/getSeekList"
    }),

    // 回车进行搜索
    async enters() {
      // 输入为空不执行
      if (!this.productName) {
        return;
      }
      // 本地存储
      let searchHistory = null;
      if (!wx.getStorageSync("searchHistory").length) {
        searchHistory = [];
      } else {
        searchHistory = wx.getStorageSync("searchHistory");
      }
      if (searchHistory.indexOf(this.productName) === -1) {
        searchHistory.push(this.productName);
      }
      wx.setStorageSync("searchHistory", searchHistory);
      // 获取数据
      let data = await this.getSeekList(this.productName);
      console.log('skdkd.....'+data);

      // 判断不同的res_code显示不同的组件
      if (data.res_code == 1004) {
        this.updateState({
          isShow: {
            isDetail: false,
            isWithout: true,
            isHistory: false
          }
        });
      } else if (data.res_code == 1) {
        this.updateState({
          isShow: {
            isDetail: true,
            isWithout: false,
            isHistory: false
          }
        });
      }
      // 存放搜索内容
      this.updateState({
        productName: this.productName
      });
    },
    // 取消
    cancel() {
      this.productName = "";
      this.updateState({
        isShow: {
          isDetail: false,
          isWithout: false,
          isHistory: false
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
header {
  z-index: 666;
  width: 100%;
  background: #f9f9f9;
  height: 80rpx;
  line-height: 80rpx;
  box-sizing: border-box;
}
.search {
  display: flex;
  font-size: 28rpx;
  height: 60rpx;
  margin-top: 10rpx;
}

.search-bg {
  width: 100%;
  background: red;
  height: 56rpx;
  box-sizing: border-box;
  display: flex;
  background: #ededed;
  overflow: hidden;
  border-radius: 10rpx;
  margin-left: 40rpx;
  padding-left: 30rpx;

  img {
    height: 32rpx;
    width: 32rpx;
    margin: 10rpx;
  }
  .search-input {
    line-height: 30px;
    border: none;
    height: 30px;
    background: rgba(237, 237, 237, 1);
    border-radius: 5px;
  }
}

.search-text {
  width: 20%;
  height: 28rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #999da2;
  line-height: 60rpx;
  margin-left: 32rpx;
}
</style>