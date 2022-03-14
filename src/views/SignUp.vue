<template>
  <v-container
    fluid
    class="fill-height amber"
    style="padding: 0; overflow: hidden"
  >
    <v-row align="center" justify="center" class="fill-height">
      <!-- ilustasi (left-side) -->
      <v-row align="center" justify="center" class="fill-height" cols="7">
        <center>
          <v-img src="../assets/login/bubble.svg" width="70%"> </v-img>
          <v-img src="../assets/logoCerdasiaGajah.svg" width="55%"> </v-img>
          <v-img src="../assets/login/bubble.svg" width="70%"> </v-img>
        </center>
      </v-row>
      <!-- end of ilustrasi (left-side) -->

      <!-- forn sign up (right-side) -->
      <v-col cols="5" class="pl-16 pr-16 pt-10 white fill-height">
        <!-- logo cerdasia -->
        <center>
          <v-img src="../assets/tulisanCerdasia.svg" width="250"> </v-img>
        </center>
        <!-- end of logo cerdasia -->
        <center class="mt-6">
          <h5 class="align-center justify-center text-h5 font-weight-black">
            Daftar Akun
          </h5>
          <p class="text-center font-weight-light">
            Jika kamu belum mempunyai akun
          </p>
        </center>

        <!-- input nama lengkap -->
        <v-card-text style="padding: 2px" class="font-weight-bold"
          >Nama Lengkap</v-card-text
        >
        <v-text-field
          placeholder="Masukkan nama lengkap Anda"
          outlined
          rounded
          required
          color="#FF5E3C"
        ></v-text-field>
        <!-- end of input nama lengkap -->

        <!-- input email -->
        <v-card-text style="padding: 2px" class="font-weight-bold"
          >Email</v-card-text
        >
        <v-text-field
          placeholder="Masukan email Anda yang aktif"
          outlined
          rounded
          required
          color="#FF5E3C"
        ></v-text-field>
        <!-- end of input email -->

        <!-- input password -->
        <v-card-text style="padding: 2px" class="font-weight-bold"
          >Password</v-card-text
        >
        <v-text-field
          placeholder="Minimal 8 karakter"
          outlined
          rounded
          type="password"
          required
          color="#FF5E3C"
        ></v-text-field>
        <!-- end of input password -->

        <!-- konfirmasi password -->
        <v-card-text style="padding: 2px" class="font-weight-bold"
          >Konfirmasi Password</v-card-text
        >
        <v-text-field
          placeholder="Pastikan sama dengan password di atas"
          outlined
          rounded
          type="password"
          required
          color="#FF5E3C"
        ></v-text-field>
        <!-- end of konfirmasi password -->

        <!-- button daftar -->
        <v-row justify="center" class="pb-10 mt-0">
          <v-btn
            rounded
            color="#FF5E3C"
            class="white--text text-capitalize py-6"
            width="90%"
            to="Home"
          >
            Daftar
          </v-btn>
        </v-row>
        <!-- end of button daftar -->

        <!-- go to sign in -->
        <v-row justify="center" class="mb-10">
          <p class="text-center font-weight-light">Punya akun?</p>
          &emsp;
          <a
            @click="redirectSignIn()"
            class="text-center font-weight-light"
            style="color: #ff5e3c"
            >Silahkan untuk masuk ke akun Anda</a
          >
        </v-row>
        <!-- end of go to sign in -->
      </v-col>
      <!-- end of forn sign up (right-side) -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      initHeight: window.innerHeight / 2,
      initHeight2: window.innerHeight / 4,
    };
  },
  methods: {
    redirectSignIn() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.style-1 {
  background-color: #fefce9;
}
</style>
