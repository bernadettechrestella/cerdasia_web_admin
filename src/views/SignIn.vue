<template>
    <v-container fluid class="fill-height" style="background-color: #FEFCE9">
        <v-row>
            <v-col cols="5" class="pl-10 pr-10 pt-10">
                    <!-- <v-col cols="12" class="pa-5"> -->
                        <center>
                            <v-img
                                src="../assets/tulisanCerdasia.svg"
                                width="300"
                                >
                            </v-img>
                        </center>
                            <v-card-title class="align-center justify-center text-h4">Masuk</v-card-title>
                                <p class="text-center font-weight-light">Jika kamu sudah memiliki akun</p>
                                <v-card-text class="font-weight-light">Email</v-card-text>
                                <v-text-field
                                    outlined
                                    rounded
                                    required
                                    color="#FF5E3C"
                                ></v-text-field>
                                <v-card-text class="font-weight-light">Sandi</v-card-text>
                                <v-text-field
                                    outlined
                                    rounded
                                    required
                                    color="#FF5E3C"
                                ></v-text-field>
                                <v-row class="pl-5 pr-5 pb-5">
                                    <v-checkbox
                                        label="Ingat Saya?"
                                        color="orange darken-3"
                                        value="orange darken-3"
                                        hide-details
                                        ></v-checkbox>
                                    <v-spacer />
                                    <a class="pt-5" style="color:#FF5E3C">Lupa Sandi</a>
                                </v-row>
                                <v-row justify="center" class="pb-10">
                                    <v-btn
                                        rounded
                                        color="#FF5E3C"
                                        class="white--text"
                                        width="150"
                                        to="Home">
                                        Masuk
                                    </v-btn>
                                </v-row>
                                <p class="text-center font-weight-light">atau masuk dengan akun lain?</p>
                                <v-row justify="center" class="pt-3 pb-3">
                                    <v-icon>mdi-google</v-icon>
                                    &emsp;
                                    <v-icon>mdi-facebook</v-icon>
                                    &emsp;
                                    <v-icon>mdi-instagram</v-icon>
                                    &emsp;
                                    <v-icon>mdi-linkedin</v-icon>
                                </v-row>
                                <v-row justify="center">
                                <p class="text-center font-weight-light">Belum punya akun?</p>
                                &emsp;
                                <a @click="redirectSignUp()" class="text-center font-weight-light" style="color:#FF5E3C">Klik disini untuk daftar akun.</a>
                                </v-row>
                    <!-- </v-col> -->
            </v-col>

                <v-col cols="7" style="padding: 0px">
                        <v-img
                        src="../assets/lingkaran.svg"
                        width="100%"
                        :min-height="initHeight"
                        >
                            <v-row align="center" justify="center" class="pl-15 ml-15">
                                <v-col>
                                    <v-row>
                                        <v-col>
                                        <v-img
                                            src="../assets/logoCerdasiaGajah.svg"
                                            width="90%"
                                            :min-height="initHeight2">
                                        </v-img>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-img>
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SignIn',
    data () {
        return {
            initHeight: (window.innerHeight)/2,
            initHeight2: (window.innerHeight)/4
        }
    },
    methods: {
        redirectSignUp() {
          this.$router.push('/SignUp')
        }
    }
}
</script>

<style>
  .style-1 {
    background-color: #FEFCE9
  }
</style>