<template>
    <v-container fluid class="fill-height" style="background-color: #FEFCE9">
        <v-row>
            <v-col cols="4">
                    <!-- <v-col cols="12" class="pa-5"> -->
                        <!-- <center> -->
                            <v-img
                                src="../assets/cerdasia.png"
                                width="150"
                                >
                            </v-img>
                            <v-card-title class="align-center justify-center text-h4">Sign In</v-card-title>
                                <p class="text-center font-weight-light">Sign in to stay connected</p>
                                <v-card-text class="font-weight-light">Email</v-card-text>
                                <v-text-field
                                    outlined
                                    rounded
                                    required
                                    color="#FF5E3C"
                                ></v-text-field>
                                <v-card-text class="font-weight-light">Password</v-card-text>
                                <v-text-field
                                    outlined
                                    rounded
                                    required
                                    color="#FF5E3C"
                                ></v-text-field>
                                <v-row class="pl-5 pr-5 pb-5">
                                    <v-checkbox
                                        label="Remember Me ?"
                                        color="orange darken-3"
                                        value="orange darken-3"
                                        hide-details
                                        ></v-checkbox>
                                    <v-spacer />
                                    <a class="pt-5 orange--text">Forgot Password</a>
                                </v-row>
                                <v-row justify="center" class="pb-10">
                                    <v-btn
                                        rounded
                                        color="#FF5E3C"
                                        class="white--text"
                                        width="150"
                                        to="Home">
                                        Sign In
                                    </v-btn>
                                </v-row>
                                <p class="text-center font-weight-light">or sign in with other accounts?</p>
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
                                <p class="text-center font-weight-light">Don't have an account?</p>
                                &emsp;
                                <a @click="redirectSignUp()" class="text-center font-weight-light orange--text">Click here to sign up.</a>
                                </v-row>
                        <!-- </center> -->
                    <!-- </v-col> -->
            </v-col>

                <v-col cols="8" style="padding: 0px">
                        <v-img
                        src="../assets/lingkaran.svg"
                        width="100%"
                        :min-height="initHeight"
                        >
                            <v-row align="center" justify="center" class="pt-5 pl-15 mt-5 ml-15">
                                <v-col>
                                    <v-row class="pl-5 pr-12">
                                        <v-col cols="4">
                                        <v-img
                                            src="../assets/singa.svg"
                                            width="100%"
                                            :min-height="initHeight2"
                                            >
                                        </v-img>
                                        </v-col>
                                        <v-spacer />
                                        <v-col cols="4">
                                        <v-img
                                            src="../assets/cacing.svg"
                                            width="100%"
                                            :min-height="initHeight2">
                                        </v-img>
                                        </v-col>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <v-col cols="6">
                                        <v-img
                                            src="../assets/gajah.svg"
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