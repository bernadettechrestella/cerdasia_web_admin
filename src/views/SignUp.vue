<template>
    <v-container fluid class="fill-height" style="background-color: #FEFCE9">
        <v-row>
            <v-col cols="6" class="pl-10 pr-10 pt-10">
                <center>
                <v-img
                    src="../assets/tulisanCerdasia.svg"
                    width="300"
                    >
                </v-img>
                </center>
                <v-card-title class="align-center justify-center text-h4">Daftar Akun</v-card-title>
                <p class="text-center font-weight-light">Jika kamu belum punya akun</p>
                <v-row>
                    <v-col>
                        <v-card-text class="font-weight-light">Nama Depan</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-card-text class="font-weight-light">Nama Belakang</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card-text class="font-weight-light">Email</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-card-text class="font-weight-light">No. HP</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                    <v-card-text class="font-weight-light">Sandi</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-card-text class="font-weight-light">Konfirmasi Sandi</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="pb-5" justify="center">
                    <v-checkbox
                        label="Saya setuju dengan aturan ini"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                        ></v-checkbox>
                </v-row>
                <v-row justify="center" class="pb-10">
                    <v-btn
                        rounded
                        color="#FF5E3C"
                        class="white--text"
                        width="150"
                        to="/">
                        Daftar
                    </v-btn>
                </v-row>
                <p class="text-center font-weight-light">atau daftar dengan akun lain?</p>
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
                <p class="text-center font-weight-light">Punya akun?</p>
                &emsp;
                <a @click="redirectSignIn()" class="text-center font-weight-light" style="color:#FF5E3C">Klik disini untuk masuk ke akun Anda.</a>
                </v-row>
            </v-col>

            <v-col cols="6" style="padding: 0px">
                    <v-img
                        src="../assets/lingkaran.svg"
                        width="100%"
                        :min-height="initHeight"
                        >
                <v-row align="center" justify="center" class="pl-7 ml-15">
                    <v-col>
                        <v-row align="center" justify="center">
                            <v-col>
                            <v-img
                                src="../assets/logoCerdasiaGajah.svg"
                                width="100%"
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
    name: 'SignUp',
    data () {
        return {
            initHeight: (window.innerHeight)/2,
            initHeight2: (window.innerHeight)/4
        }
    },
    methods: {
        redirectSignIn() {
          this.$router.push('/')
        }
    }
}
</script>

<style>
  .style-1 {
    background-color: #FEFCE9
  }
</style>