<template>
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >文章标题</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        > 
      </h3>
      <!-- <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              :class="{ active: this.show === 'python' }"
              data-toggle="tab"
              href="#kt_tab_pane_3_1"
              @click="show = 'python'"
              >python</a
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
              :class="{ active: this.show === 'day' }"
              data-toggle="tab"
              href="#kt_tab_pane_3_3"
              @click="show = 'day'"
              >Day</a
            >
          </li>
        </ul>
      </div> -->


    </div>
    <!--end::Header-->
    
    <!--end::Body-->
  </div>
</template>

<script>


export default {
  name: "widget-article",
  data() {
    return {
      show: "python",
      python: [
        {
          img: "media/svg/avatars/018-girl-9.svg",
          name: "Jessie Clarcson",
          desc: "HTML, CSS Coding",
          paid: "$1,200,000",
          percentage: "+52%",
          class: "warning"
        },
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "Successful Fellas",
          paid: "$2,000,000",
          percentage: "+28%",
          class: "primary"
        },
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Lebron Wayde",
          desc: "ReactJS Developer",
          paid: "$3,400,000",
          percentage: "-34%",
          class: "danger"
        },
        {
          img: "media/svg/avatars/043-boy-18.svg",
          name: "Kevin Leonard",
          desc: "Art Director",
          paid: "$35,600,000",
          percentage: "+230%",
          class: "success"
        },
        {
          img: "media/svg/avatars/014-girl-7.svg",
          name: "Natali Trump",
          desc: "UI/UX Designer",
          paid: "$4,500,000",
          percentage: "+48%",
          class: "success"
        }
      ],
      Algorithm: [
        {
          img: "media/svg/avatars/018-girl-9.svg",
          name: "Jessie Clarcson",
          desc: "HTML, CSS Coding",
          paid: "$1,200,000",
          percentage: "+52%",
          class: "warning"
        },
        {
          img: "media/svg/avatars/014-girl-7.svg",
          name: "Natali Trump",
          desc: "UI/UX Designer",
          paid: "$4,500,000",
          percentage: "+48%",
          class: "success"
        },
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Lebron Wayde",
          desc: "ReactJS Developer",
          paid: "$3,400,000",
          percentage: "-34%",
          class: "danger"
        },
        {
          img: "media/svg/avatars/043-boy-18.svg",
          name: "Kevin Leonard",
          desc: "Art Director",
          paid: "$35,600,000",
          percentage: "+230%",
          class: "success"
        },
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "Successful Fellas",
          paid: "$2,000,000",
          percentage: "+28%",
          class: "primary"
        }
      ],
      day: [
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "Successful Fellas",
          paid: "$2,000,000",
          percentage: "+28%",
          class: "primary"
        },
        {
          img: "media/svg/avatars/018-girl-9.svg",
          name: "Jessie Clarcson",
          desc: "HTML, CSS Coding",
          paid: "$1,200,000",
          percentage: "+52%",
          class: "warning"
        },
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Lebron Wayde",
          desc: "ReactJS Developer",
          paid: "$3,400,000",
          percentage: "-34%",
          class: "danger"
        },
        {
          img: "media/svg/avatars/014-girl-7.svg",
          name: "Natali Trump",
          desc: "UI/UX Designer",
          paid: "$4,500,000",
          percentage: "+48%",
          class: "success"
        },
        {
          img: "media/svg/avatars/043-boy-18.svg",
          name: "Kevin Leonard",
          desc: "Art Director",
          paid: "$35,600,000",
          percentage: "+230%",
          class: "success"
        } 
      ]
    };
  },

  computed: {
    dataToShow() {
      if (this.show === "python") return this.python;
      if (this.show === "Algorithm") return this.Algorithm;
      if (this.show === "day") return this.day;
      return this.python;
    }
  }
};
</script>
