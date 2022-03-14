<template>
  <v-container fluid class="fill-height amber" style="padding: 0">
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

      <!-- forn login (right-side) -->
      <v-col cols="5" class="pl-16 pr-16 pt-10 white fill-height">
        <!-- logo cerdasia -->
        <center>
          <v-img src="../assets/tulisanCerdasia.svg" width="250"> </v-img>
        </center>
        <!-- end of logo cerdasia -->
        <center class="mt-6">
          <h5 class="align-center justify-center text-h5 font-weight-black">
            Masuk Akun
          </h5>
          <p class="text-center font-weight-light">
            Jika kamu sudah memiliki akun
          </p>
        </center>

        <!-- input email -->
        <v-card-text style="padding: 4px" class="font-weight-bold"
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
        <v-card-text style="padding: 4px" class="font-weight-bold"
          >Password</v-card-text
        >
        <v-text-field
          placeholder="Minimal 8 karakter"
          outlined
          rounded
          required
          type="password"
          color="#FF5E3C"
        ></v-text-field>
        <!-- end of input password -->

        <!-- checkbox -->
        <v-row class="pl-5 pr-5 pb-5">
          <v-checkbox
            label="Ingat Saya?"
            color="orange darken-3"
            value="orange darken-3"
            hide-details
          ></v-checkbox>
          <v-spacer />
          <a class="pt-5" style="color: #ff5e3c">Lupa Password</a>
        </v-row>
        <!-- end of checkbox -->

        <!-- button masuk -->
        <v-row justify="center" class="pb-10 mt-6">
          <v-btn
            rounded
            color="#FF5E3C"
            class="white--text text-capitalize py-6"
            width="90%"
            to="Home"
          >
            Masuk
          </v-btn>
        </v-row>
        <!-- end of button masuk -->

        <!-- go to sign up -->
        <v-row justify="center">
          <p class="text-center font-weight-light">Belum punya akun?</p>
          &emsp;
          <a
            @click="redirectSignUp()"
            class="text-center font-weight-light"
            style="color: #ff5e3c"
            >Klik disini untuk daftar akun.</a
          >
        </v-row>
        <!-- end of go to sign up -->
      </v-col>
      <!-- end of forn login (right-side) -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      initHeight: window.innerHeight / 2,
      initHeight2: window.innerHeight / 4,
    };
  },
  methods: {
    redirectSignUp() {
      this.$router.push("/SignUp");
    },
  },
};
</script>

<style>
.style-1 {
  background-color: #fefce9;
}
</style>
