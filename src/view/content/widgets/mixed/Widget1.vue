<template>
  <div
    class="card card-custom bg-radial-gradient-primary gutter-b card-stretch"
  >
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title font-weight-bolder text-white">My Information</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor text-white"></i></Dropdown2>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Chart-->
      <!--end::Chart-->
      <!--begin::Stats-->
      <div class="card-spacer bg-white card-rounded flex-grow-1">
        <!--begin::Row-->
        <div class="row m-0">
          <div class="d-flex align-items-center mt-5">
          <div class="symbol symbol-100 mr-5">
            <img class="symbol-label" :src="picture" alt="" />
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <a
              href="#"
              class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              Noah Chen(陈雨烟)
            </a>
            <div class="text-muted mt-1">Application Developer</div>
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/Communication/Mail-notification.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span class="navi-text text-muted text-hover-primary">
                    746562737@qq.com
                  </span>
                </span>
              </a>
            </div>
            <button class="btn btn-light-primary btn-bold">
              Pass
            </button>
          </div>
        </div>

        <div class="navi navi-spacer-x-0 p-0">
          <!--begin::Item-->
          <a
            to="/builder"
            @click.native="closeOffcanvas"
            href="#"
            class="navi-item"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-success">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/General/Github.svg"
                    />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">Github</div>
                <div class="text-muted">
                 Check My Github
                  <!-- <span
                    class="label label-light-danger label-inline font-weight-bold"
                  >
                    update
                  </span> -->
                </div>
              </div>
            </div>
          </a>
          <!--end:Item-->
          <!--begin::Item-->
          <router-link      
            to=""
            @click.native="showWechat()"
            href="#"
            class="navi-item"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-warning">
                    <!--begin::Svg Icon-->
                    <inline-svg src="media/svg/icons/Shopping/wechat.svg" />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">Wechat</div>
                <div class="text-muted">Contact Me For Anything</div>
              </div>
            </div>
          </router-link>
          <!--end:Item-->
          <!--begin::Item-->
          <router-link
            to="/resume"
            @click.native="closeOffcanvas"
            href="#"
            class="navi-item"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-danger">
                    <!--begin::Svg Icon-->
                    <inline-svg src="media/svg/icons/Files/Selected-file.svg" />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">My Resume</div>
                <div class="text-muted">Looking For A Job</div>
              </div>
            </div>
          </router-link>
          <!--end:Item-->
          <!--begin::Item-->
          <a
            href="https://weibo.com/u/5488919907"
            @click.native="closeOffcanvas"
            class="navi-item"
            target="_blank"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-primary">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/Communication/weibo.svg"
                    />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">My Weibo</div>
                <div class="text-muted">Check My Weibo</div>
              </div>
            </div>
          </a>
          <!--end:Item-->
        </div>




        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";
import Bus from "@/utils/bus.js"
export default {
  name: "widget-10",
  components: {
    Dropdown2
  },
  data() {
    return {
      chartOptions: {},
      wechatflag:false,
      series: [
        {
          name: "Net Profit",
          data: [35, 65, 75, 55, 45, 60, 55]
        },
        {
          name: "Revenue",
          data: [40, 70, 80, 60, 50, 65, 60]
        }
      ]
    };
  },
  methods:{
    showWechat(){
      this.wechatflag=true;
      Bus.$emit('wechatflag', this.wechatflag)
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    picture() {
      return process.env.BASE_URL + "media/users/noah.jpg";
    }
  },
  mounted() {
    // reference; kt_mixed_widget_1_chart
    Bus.$emit('wechatflag', this.wechatflag)
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["30%"],
          endingShape: "rounded"
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: this.layoutConfig("font-family")
        },
        y: {
          formatter: function(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [this.layoutConfig("colors.theme.base.success"), "#ffffff"],
      grid: {
        borderColor: this.layoutConfig("colors.gray.gray-200"),
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false
          }
        }
      }
    };
  }
};
</script>
