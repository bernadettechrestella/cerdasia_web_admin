<template>
  <v-app>
    <v-main style="background: #f9f7f7">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
/* TODO : cari cara yang lebih efektif */

@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,500&display=swap");

* {
  font-family: "Nunito", sans-serif !important;
}

html {
  margin: 0 !important;
}

.v-list-item-group .v-list-item--active .v-list-item__icon .v-application {
  color: white !important;
  caret-color: white !important;
}

.v-application--wrap {
  background-color: #f9f7f7;
}
</style>
