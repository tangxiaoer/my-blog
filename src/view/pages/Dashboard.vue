<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div class="col-xxl-4">
        <MixedWidget1></MixedWidget1>
      </div>
      <div class="col-xxl-8">
        <ListWidget9></ListWidget9>
      </div>

      <div class="col-xxl-4">
        <StatsWidget7></StatsWidget7>
        <StatsWidget12></StatsWidget12>
      </div>
      <div class="col-xl-8">
        <AdvancedTableWidget2></AdvancedTableWidget2>
      </div>

      <div class="col-lg-12 col-xxl-12">
        <ListWidget3></ListWidget3>
      </div>
      <div v-if="wechatflag" class='popContainer'>
        <img class="symbol-label_close" src="media/svg/illustrations/close.svg" @click="closeWechat()">
        <img class="symbol-label" :src="picture" alt="" style="width:300px;height:300px" />
      </div>

    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import AdvancedTableWidget2 from "@/view/content/widgets/advance-table/Widget2.vue";
import MixedWidget1 from "@/view/content/widgets/mixed/Widget1.vue";
import ListWidget2 from "@/view/content/widgets/list/Widget2.vue";
import ListWidget3 from "@/view/content/widgets/list/Widget3.vue";
import ListWidget8 from "@/view/content/widgets/list/Widget8.vue";
import ListWidget9 from "@/view/content/widgets/list/Widget9.vue";
import ListWidget14 from "@/view/content/widgets/list/Widget14.vue";
import ListWidget15 from "@/view/content/widgets/list/Widget15.vue";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7.vue";
import StatsWidget12 from "@/view/content/widgets/stats/Widget12.vue";
import Bus from "@/utils/bus.js"
export default {
  name: "dashboard",
  data(){
    return {
      wechatflag:false,
      url:"/media/pdf/chenyuyan.pdf",
      // url:"http://image.cache.timepack.cn/nodejs.pdf",
    }
  },
  components: {
    AdvancedTableWidget2,
    MixedWidget1,
    // ListWidget2,
    ListWidget3,
    // ListWidget8,
    ListWidget9,
    // ListWidget14,
    // ListWidget15,
    StatsWidget7,
    StatsWidget12
  },
  mounted() {
    
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  created(){
    var _this=this
    Bus.$on('wechatflag', (xx) => {
      _this.wechatflag = xx
      console.log(xx)
      
    })
    console.log(_this.wechatflag)
  },
  computed:{
    picture() {
      return process.env.BASE_URL + "media/users/wechat.jpg";
    },
  },
  methods: {
    closeWechat(){
      this.wechatflag=false
    },
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
<style scoped>
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.symbol-label{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
}
.symbol-label_close{
    position: fixed;
    top: 13%;
    right: 15%;
    height: 70px;
    margin: auto;
    cursor: pointer; 
}
</style>
