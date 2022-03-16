<template>
  <div>
    <v-row>
      <h4 class="mt-9 font-weight-medium">Periode</h4>
      <v-col cols="3" class="pr-4 mr-2">
        <v-select
          rounded
          height="40"
          color="#FF5E3C"
          background-color="#ffffff"
          v-model="select"
          :items="items"
          placeholder="Jangka Waktu"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <h2 class="mb-8 black--text">Perfomance Pelajaran</h2>
        <v-card color="#FFFFFF" class="mx-auto pb-10 pt-10 elevation-0">
          <v-row>
            <v-col>
              <!-- <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart> -->
              <vc-donut
                foreground="grey"
                :size="250"
                unit="px"
                :thickness="30"
                hasLegend
                legendPlacement="bottom"
                :sections="sections"
                ><h1 class="deep-orange--text">50%</h1></vc-donut
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="6">
        <h2 class="mb-8 black--text">Perfomance Pelajaran</h2>
        <v-card color="#FFFFFF" class="mx-auto pb-10 pt-10 elevation-0">
          <v-row>
            <v-col>
              <!-- <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart> -->
              <vc-donut
                foreground="grey"
                :size="250"
                unit="px"
                :thickness="30"
                hasLegend
                legendPlacement="bottom"
                :sections="sections"
                ><h1 class="deep-orange--text">50%</h1></vc-donut
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'

export default {
  name: "Performance",
  components: {
    // apexchart: VueApexCharts
  },
  data: () => ({
    value: 95,
    drawer: true,
    items: [["Hari Ini"], ["Minggu Ini"], ["Bulan Ini"], ["Tahun Ini"]],
    sections: [
      { label: "Suku Kata 1", value: 25, color: "#3762F0" },
      { label: "Alfabet", value: 25, color: "#EA6A12" },
      { label: "Suku Kata 2", value: 25, color: "#FAB400" },
      { label: "Kalimat", value: 25, color: "#FF3D00" },
    ],
    series: [44, 55, 41, 17, 15],
    chartOptions: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      // title: {
      //   text: 'Gradient Donut with custom Start-angle'
      // },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  }),
};
</script>

<style>
.cdc-legend {
  width: 70%;
}

h2 {
  color: #ff5e3c;
}
</style>
