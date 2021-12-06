<template>
  <v-app>
        <v-container class="pa-6" fluid
          style="background-color:white">
          <SearchBar />
          <Performance />
          <TablePerkembangan />
          <TambahPengguna />
        </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/dashboard/SearchBar.vue';
import Performance from '@/components/dashboard/Performance.vue';
import TablePerkembangan from '@/components/dashboard/TablePerkembangan.vue';
import TambahPengguna from '@/components/dashboard/TambahPengguna.vue';

export default {
  name: 'Dashboard',

  components: {
    SearchBar,
    Performance,
    TablePerkembangan,
    TambahPengguna
  },

  data: () => ({
    //
  }),
};
</script>