<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mb-0">
      <v-col cols="10">
        <v-row>
          <v-text-field
            color="#FF5E3C"
            label="Search"
            background-color="#ffffff"
            rounded
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            class=""
            full-width
          ></v-text-field>
        </v-row>
      </v-col>
      &emsp;
      <v-col>
        <v-row style="margin-bottom: 0px" align="center">
          <v-btn icon>
            <v-icon color="#757575">mdi-bell</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#757575">mdi-cog</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.v-application .v-text-field--outlined {
  color: transparent !important;
}
</style>
