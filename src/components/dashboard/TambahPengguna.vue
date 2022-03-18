<template>
  <div class="pt-5 mt-5">
    <h2 class="mb-8 mt-8 black--text">Tambahkan Pengguna Baru Cerdasia</h2>
    <v-row class="pt-0">
      <!-- input nama lengkap -->
      <v-col cols="6">
        <v-card-text style="padding: 6px" class="font-weight-bold"
          >Nama Lengkap</v-card-text
        >
        <v-text-field
          placeholder="Masukkan nama lengkap Anda"
          outlined
          background-color="white"
          rounded
          required
          color="#FF5E3C"
        ></v-text-field>
      </v-col>
      <!-- end of input nama lengkap -->
      <!-- input email -->
      <v-col cols="6">
        <v-card-text style="padding: 6px" class="font-weight-bold"
          >Email</v-card-text
        >
        <v-text-field
          placeholder="Masukan email Anda yang aktif"
          outlined
          rounded
          required
          background-color="white"
          color="#FF5E3C"
        ></v-text-field>
      </v-col>
      <!-- end of input email -->
    </v-row>

    <v-row style="margin-top: -36px">
      <!-- input Password -->
      <v-col cols="6">
        <v-card-text style="padding: 6px" class="font-weight-bold"
          >Password</v-card-text
        >
        <v-text-field
          placeholder="Minimal 8 karakter"
          outlined
          background-color="white"
          rounded
          required
          type="password"
          color="#FF5E3C"
        ></v-text-field>
      </v-col>
      <!-- end of input Password -->

      <!-- input Password -->
      <v-col cols="6">
        <v-card-text style="padding: 6px" class="font-weight-bold"
          >Konfirmasi Password</v-card-text
        >
        <v-text-field
          placeholder="Pastikan sama dengan password yang telah diinput"
          outlined
          background-color="white"
          rounded
          required
          type="password"
          color="#FF5E3C"
        ></v-text-field>
      </v-col>
      <!-- end of input Password -->
    </v-row>
    <!-- <v-checkbox
      label="Dilindungi Autentifikasi 2 Faktor"
      color="#FF5E3C"
    ></v-checkbox> -->
    <!-- <v-col> -->
    <v-btn
      width="400"
      rounded
      class="white--text white--text text-capitalize py-6"
      color="#FF5E3C"
      >Tambahkan Pengguna Baru</v-btn
    >
    <!-- </v-col> -->
  </div>
</template>

<script>
export default {
  name: "TambahPengguna",
};
</script>

<style scoped>
.v-input__slot {
  box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.08) !important;
}
</style>
