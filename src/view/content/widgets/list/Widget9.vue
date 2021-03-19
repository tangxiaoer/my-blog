<template>
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >文章摘要</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >My Notebook</span
        > 
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              :class="{ active: this.show === 'language' }"
              data-toggle="tab"
              href="#kt_tab_pane_3_1"
              @click="show = 'language'"
              >Language</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              :class="{ active: this.show === 'Algorithm' }"
              data-toggle="tab"
              href="#kt_tab_pane_3_2"
              @click="show = 'Algorithm'"
              >Algorithm</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              :class="{ active: this.show === 'SQL' }"
              data-toggle="tab"
              href="#kt_tab_pane_3_3"
              @click="show = 'SQL'"
              >SQL</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0" style="width: 50px"></th>
              <th class="p-0" style="min-width: 150px"></th>
              <th class="p-0" style="min-width: 120px"></th>
              <th class="p-0" style="min-width: 70px"></th>
              <th class="p-0" style="min-width: 70px"></th>
              <th class="p-0" style="min-width: 50px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in dataToShow">
              <tr v-bind:key="i">
                <td class="pl-0">
                  <div class="symbol symbol-50 symbol-light mr-2 mt-2">
                    <span class="symbol-label">
                      <img :src="item.img" class="h-75 align-self-end" alt="" />
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ item.title }}</a
                  >
                  <span class="text-muted font-weight-bold d-block">{{
                    item.abstract
                  }}</span>
                </td>
                <td></td>
                <td class="text-right">
                  <span class="text-muted font-weight-bold d-block font-size-sm"
                    >Paid</span
                  >
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.paid }}</span
                  >
                </td>
                <td class="text-right">
                  <span
                    class="font-weight-bolder"
                    v-bind:class="`text-${item.class}`"
                    >{{ item.percentage }}</span
                  >
                </td>
                <td class="text-right pr-0">
                  <a  class="btn btn-icon btn-light btn-sm" @click="test(item.id)">
                    <!-- href="#/article" -->
                    <span class="svg-icon svg-icon-md svg-icon-success">
                      <inline-svg
                        src="media/svg/icons/Navigation/Arrow-right.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import {getAbstract} from "@/api/index.js";
export default {
  
  name: "widget-9",
  data() {
    return {
      show: "language",
      language: [
        // {
        //   img: "media/svg/avatars/018-girl-9.svg",
        //   name: "Jessie Clarcson",
        //   desc: "HTML, CSS Coding",
        //   paid: "$1,200,000",
        //   percentage: "+52%",
        //   class: "warning"
        // }
      ],
      Algorithm: [       
        // {
        //   img: "media/svg/avatars/001-boy.svg",
        //   name: "Brad Simmons",
        //   desc: "Successful Fellas",
        //   paid: "$2,000,000",
        //   percentage: "+28%",
        //   class: "primary"
        // }
      ],
      SQL: [      
        // {
        //   img: "media/svg/avatars/043-boy-18.svg",
        //   name: "Kevin Leonard",
        //   desc: "Art Director",
        //   paid: "$35,600,000",
        //   percentage: "+230%",
        //   class: "success"
        // } 
      ]
    };
  },
  methods:{
    test(val){
      alert(val)
      this.$router.replace('/article')
    }
  },
  mounted(){
    getAbstract().then((res)=>{
      //console.log(res.data)
      for(var item in res.data){
        // console.log(res.data[item])
        if(res.data[item].type==='Language')
        {
          this.language.push(res.data[item])
        }else if(res.data[item].type==='SQL')
        {
          this.SQL.push(res.data[item])
        }
        else if(res.data[item].type==='Algorithm')
        {
          this.Algorithm.push(res.data[item])
        }
      }
    })
  },
  computed: {
    dataToShow() {
      if (this.show === "language") return this.language;
      if (this.show === "Algorithm") return this.Algorithm;
      if (this.show === "SQL") return this.SQL;
      return this.language;
    }
  }
};
</script>
