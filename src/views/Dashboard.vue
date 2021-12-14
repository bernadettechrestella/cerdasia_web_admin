<template>
  <v-app>
        <v-container class="pl-10 pb-10 pr-10 pt-8" fluid
          style="background-color:white">
          <SearchBar />
          <Performance />
          <!-- <TablePerkembangan /> -->
          <TablePelajaran />
          <TableQuiz />
          <TambahPengguna />
        </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/dashboard/SearchBar.vue';
import Performance from '@/components/dashboard/Performance.vue';
// import TablePerkembangan from '@/components/dashboard/TablePerkembangan.vue';
import TablePelajaran from '@/components/dashboard/TablePelajaran.vue';
import TableQuiz from '@/components/dashboard/TableQuiz.vue';
import TambahPengguna from '@/components/dashboard/TambahPengguna.vue';

export default {
  name: 'Dashboard',

  components: {
    SearchBar,
    Performance,
    // TablePerkembangan,
    TablePelajaran,
    TableQuiz,
    TambahPengguna
  },

  data: () => ({
    //
  }),
};
</script>