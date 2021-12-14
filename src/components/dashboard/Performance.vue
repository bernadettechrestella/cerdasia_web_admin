<template>
    <div>
        <v-card color="#FEFCE9" class="pa-0">
          <v-row>
            <v-spacer />
              <v-col cols="3" class="pr-4 mr-2">
                <v-select
                  rounded
                  outlined
                  v-model="select"
                  :items="items"
                  placeholder="Jangka Waktu"
                  color="#FF5E3C"
                ></v-select>
              </v-col>
          </v-row>
          <v-row class="pl-10">
            <v-col>
              <h2>Performance Pelajaran</h2>
            </v-col>
            <v-col>
              <h2>Performance Quiz</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
                <vc-donut
                  background = "#FEFCE9"
                  foreground = "grey"
                  :size = "250"
                  unit = "px"
                  :thickness = "30"
                  hasLegend
                  legendPlacement = "right"
                  :sections = "sections"
                  >50%</vc-donut>
            </v-col>

            <v-col>
              <!-- <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart> -->
              <vc-donut
                  background = "#FEFCE9"
                  foreground = "grey"
                  :size = "250"
                  unit = "px"
                  :thickness = "30"
                  hasLegend
                  legendPlacement = "right"
                  :sections = "sections"
                  >50%</vc-donut>
            </v-col>
          </v-row>

        </v-card>
    </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Performance',
  components: {
    // apexchart: VueApexCharts
  },
  data: () => ({
        value: 95,
        drawer: true,
        items: [
          [ 'Hari Ini' ],
          [ 'Minggu Ini' ],
          [ 'Bulan Ini' ],
          [ 'Tahun Ini' ],
        ],
        sections: [
          { label: 'Suku Kata 1', value: 25, color: 'blue'},
          { label: 'Alfabet', value: 25, color: 'orange'},
          { label: 'Suku Kata 2', value: 25, color: 'yellow'},
          { label: 'Kalimat', value: 25, color: 'red'},
        ],
        series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
              width: 380,
              type: 'donut',
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 270
              }
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            // title: {
            //   text: 'Gradient Donut with custom Start-angle'
            // },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
      }),
    };
</script>

<style>
  h2 {
    color: #FF5E3C;
  }
</style>
