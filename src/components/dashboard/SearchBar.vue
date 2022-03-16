<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="11">
        <v-row>
          <v-text-field
            color="#FF5E3C"
            label="Search"
            outlined
            rounded
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            class="pt-3"
          ></v-text-field>
        </v-row>
      </v-col>
      &emsp;
      <v-col>
        <v-row style="margin-bottom: 0px" align="center">
          <v-btn icon>
            <v-icon color="#FF5E3C">mdi-bell</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#FF5E3C">mdi-cog</v-icon>
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
