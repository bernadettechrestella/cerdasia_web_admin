<template>
  <v-app>
    <v-container
      class="pl-10 pb-10 pr-10 pt-8"
      fluid
      style="background-color: white"
    >
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
          <h2 class="black--text">Tambah Pelajaran</h2>
          <h3 class="font-weight-regular">Cakap (Learning Kata)</h3>
        </div>
      </v-row>
      <!-- end of title -->

      <!-- form -->
      <div class="mt-8">
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

        <!-- aset gambar -->
        <v-card-text style="padding: 2px" class="font-weight-bold subtitle-1"
          >Tambahkan Aset Gambar</v-card-text
        >
        <v-file-input
          prepend-icon=""
          class="justify-center"
          accept="image/*"
          prepend-inner-icon="mdi-cloud-upload"
          placeholder="Upload aset gambar ( ekstensi .jpg / .png maks 2 MB )"
          rounded
          outlined
          color="#FF5E3C"
        ></v-file-input>
        <!-- end of aset gambar -->

        <!-- aset suara -->
        <v-card-text style="padding: 2px" class="font-weight-bold subtitle-1"
          >Tambahkan Aset Suara</v-card-text
        >
        <v-file-input
          prepend-icon=""
          class="justify-center"
          accept="audio/*"
          prepend-inner-icon="mdi-cloud-upload"
          placeholder="Upload aset suara ( ekstensi .mp3 / .mp4 ( maks 2 MB )"
          rounded
          outlined
          color="#FF5E3C"
        ></v-file-input>
        <!-- end of aset suara -->

        <v-btn
          width="400"
          rounded
          class="white--text white--text text-capitalize py-6 mt-4"
          color="#FF5E3C"
          >Unggah Pelajaran</v-btn
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

  data: () => ({
    item: [],
  }),

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
