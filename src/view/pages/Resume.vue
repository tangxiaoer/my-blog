<template>
  <div>
    <!--begin::Dashboard-->
      <div class='popContainer_pdf'>
      <pdf 
      ref="pdf"
      v-for="i in numPages" 
      :key="i"  
      :src="url" 
      :page="i"
      >
      </pdf>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import WidgetArticle from "@/view/content/widgets/list/WidgetArticle.vue";
import pdf from 'vue-pdf'


export default {
  name: "dashboard",
  data(){
    return{
        url:"/media/pdf/chenyuyan.pdf",
        numPages:[1,2]
    }
  },
  components: {
    WidgetArticle,
    pdf,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
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
.popContainer_pdf{
  width:100%
}
</style>
