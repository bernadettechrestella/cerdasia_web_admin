<template>
    <div class="pt-5 mt-5">
        <h2 class="pb-2">Perkembangan Pembelajaran Anak</h2>
            <v-data-table
                :headers="headers"
                :items="data"
                :item-class="colorBackground"
                class="elevation-1"
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
      name: 'TablePerkembangan',
    data () {
      return {
        headers: [
          {
            text: 'Nama',
            align: 'start',
            sortable: false,
            value: 'nama',
          },
          { text: 'Pelajaran', value: 'pelajaran' },
          { text: 'Level', value: 'levelpelajaran' },
          { text: 'Quiz', value: 'quiz' },
          { text: 'Level Quiz', value: 'levelquiz' },
          { text: 'Total Skor Quiz', value: 'skorquiz' },
          { text: 'Status Belajar', value: 'statusbelajar' },
        ],
        data: [
          {
            number: 1,
            nama: 'Stella',
            pelajaran: 'Alfabet',
            levelpelajaran: 1,
            quiz: 'Alfabet',
            levelquiz: 1,
            skorquiz: '0 XP',
            statusbelajar: 'Aktif',
          },
          {
            number: 2,
            nama: 'Bambang',
            pelajaran: 'Alfabet',
            levelpelajaran: 1,
            quiz: 'Alfabet',
            levelquiz: 1,
            skorquiz: '0 XP',
            statusbelajar: 'Tidak Aktif',
          },
          {
            number: 3,
            nama: 'Rian',
            pelajaran: 'Alfabet',
            levelpelajaran: 1,
            quiz: 'Alfabet',
            levelquiz: 1,
            skorquiz: '0 XP',
            statusbelajar: 'Aktif',
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