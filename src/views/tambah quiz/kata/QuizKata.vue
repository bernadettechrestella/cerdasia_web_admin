<template>
  <v-app style="background-color: #f9f7f7">
    <v-container class="pl-10 pb-10 pr-10 pt-8" fluid>
      <!-- title -->
      <v-row class="mx-2 my-4">
        <!-- left arrow -->
        <svg
          style="cursor: pointer"
          @click="back"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.735 12.8484L7.58337 26.0001L20.735 39.1517"
            stroke="#0A0A0A"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44.4167 26H7.95166"
            stroke="#0A0A0A"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <!-- end of left arrow -->
        <div class="ml-8">
          <h2 class="black--text">Tambah Pertanyaan Quiz</h2>
          <h3 class="font-weight-regular">Cakap (Kata)</h3>
        </div>
      </v-row>
      <!-- end of title -->

      <!-- form -->
      <div class="mt-8">
        <!-- id quiz -->
        <v-card-text style="padding: 2px" class="font-weight-bold subtitle-1"
          >ID</v-card-text
        >
        <v-text-field
          placeholder="Masukan ID quiz"
          outlined
          background-color="white"
          rounded
          required
          color="#FF5E3C"
        >
        </v-text-field>
        <!-- end of id quiz -->

        <!-- level pelajaran -->
        <v-card-text style="padding: 2px" class="font-weight-bold subtitle-1"
          >Level Pelajaran</v-card-text
        >
        <v-text-field
          placeholder="Masukkan level pelajaran"
          outlined
          background-color="white"
          rounded
          required
          color="#FF5E3C"
        >
        </v-text-field>
        <!-- end of level pelajaran -->

        <!-- tipe pertanyaan -->
        <v-card-text style="padding: 2px" class="font-weight-bold subtitle-1"
          >Tipe Pertanyaan</v-card-text
        >
        <v-select
          :items="items"
          placeholder="Masukkan tipe pertanyaan"
          outlined
          background-color="white"
          rounded
          required
          color="#FF5E3C"
        >
        </v-select>
        <!-- end of tipe pertanyaan -->
        <router-link to="/QuizKata/pertanyaan">
          <v-btn
            width="400"
            rounded
            class="white--text white--text text-capitalize py-6 mt-4"
            color="#FF5E3C"
            >Selanjutnya</v-btn
          ></router-link
        >
      </div>
      <!-- end of form -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "LearningAlfabet",

  components: {},

  data() {
    return {
      items: ["Gambar", "Suara", "Text"],
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.h2 {
  color: #ff5e3c;
}
h1 {
  color: #ff5e3c;
}

.v-text-field--rounded > .v-input__control > .v-input__slot {
  box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.08);
}

.theme--light.v-file-input .v-file-input__text--placeholder,
.theme--light.v-file-input .v-file-input__text {
  margin-left: 8px !important;
}
</style>
