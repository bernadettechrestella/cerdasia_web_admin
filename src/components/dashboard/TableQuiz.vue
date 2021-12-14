<template>
    <div class="pt-5 mt-5">
        <h2 class="pb-2">List Data Quiz</h2>
            <v-data-table
                :headers="headers"
                :items="data"
                :item-class="colorBackground"
                class="elevation-1"
                style="color:#FF5E3C"
            >
            <template v-slot:[`item.statusbelajar`]="{ item }">
                <v-chip
                    :color="getColor(item.statusbelajar)"
                    dark
                >
                    {{ item.statusbelajar }}
                </v-chip>
            </template>
            </v-data-table>
    </div>
</template>

<script>
  export default {
      name: 'TablePelajaran',
    data () {
      return {
        headers: [
          {
            text: 'Kategori Learning',
            align: 'start',
            sortable: true,
            value: 'kategori',
          },
          { text: 'Level', value: 'level' },
          { text: 'Materi', value: 'materi' },
          { text: 'Asset Gambar', value: 'assetGambar' },
          { text: 'Asset Suara', value: 'assetSuara' },
        ],
        data: [
          {
            number: 1,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 2,
            kategori: 'Suku Kata',
            level: 5,
            materi: 'Suku Kata 1',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 3,
            kategori: 'Kalimat',
            level: 8,
            materi: 'Kalimat',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 4,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 5,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 6,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 7,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 8,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 9,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
          {
            number: 10,
            kategori: 'Alfabet',
            level: 1,
            materi: 'Alfabet',
            assetGambar: 'image1.jpg',
            assetSuara: 'suara1.mp4'
          },
        ],
      }
    },
    methods: {
      getColor (statusbelajar) {
        if (statusbelajar === 'Aktif') return 'green'
        else return 'red'
      },
        colorBackground (item) {
        if (item.number % 2 === 1) return 'style-2'
        else return 'style-1'
    },
    },
  }
</script>

<style>
  .style-1 {
    background-color: white
  }
  .style-2 {
    background-color: #FEFCE9
  }
  h3 {
    color: #FF5E3C;
  }
  .data-table {
    color: #FF5E3C;
  }
</style>