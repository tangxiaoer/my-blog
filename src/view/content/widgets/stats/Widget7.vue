<template>
  <div class="card card-custom gutter-b">
    <!--begin::Body-->
    <div class="card-body p-0">
      <div
        class="d-flex align-items-center justify-content-between card-spacer flex-grow-1"
      >
        <span class="symbol symbol-circle symbol-50 symbol-light-danger mr-2">
          <span class="text-dark-75 font-weight-bolder font-size-h3">{{count}}</span>
          <p><span class="text-muted font-weight-bold mt-2">Do You Like Me?</span></p>
        </span>
        <div class="d-flex flex-column text-right">

          <span class="symbol-label">
            <span class="svg-icon svg-icon-xl svg-icon-danger">
              <!-- <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" /> -->
              <i v-if="!isLiked" class="iconfont icon-xinaixin1" style="font-size:50px;cursor:pointer;" @click="likeme"></i>
              <i v-if="isLiked" class="iconfont icon-xin1" style="font-size:50px;cursor:pointer;color:red" @click="likeme"></i>
            </span>
          </span>
        </div>
      </div>
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        type="area"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {getliked,setliked} from "@/api/index.js";

export default {
  name: "widget-7",
  data() {
    return {
      chartOptions: {},
      count:0,
      isLiked:false,
      series: [
        {
          name: "Net Profit",
          data: [40, 40, 40, 40, 40, 40, 40]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  methods:{
    likeme(){
      if(this.isLiked===true)
      {
        let data=
        {
          type:"del"
        }
        setliked(data).then((res)=>{

        })
        this.isLiked=false
        this.count-=1
      }else
      {
        let data=
        {
          type:"add"
        }
        setliked(data).then((res)=>{

        })
        this.isLiked=true
        this.count+=1
      }

    }
  },
  mounted() {
    getliked().then((res) => {
            this.count=res.data
      })
    // reference; kt_stats_widget_7_chart
    this.chartOptions = {
      chart: {
        type: "area",
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "solid",
        opacity: 1
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [this.layoutConfig("colors.theme.base.danger")]
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
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: this.layoutConfig("colors.gray.gray-300"),
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        min: 0,
        max: 50,
        show: false,
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
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
      colors: [this.layoutConfig("colors.theme.light.danger")],
      markers: {
        colors: [this.layoutConfig("colors.theme.light.danger")],
        strokeColor: [this.layoutConfig("colors.theme.base.danger")],
        strokeWidth: 3
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      }
    };
  }
};
</script>
