<template>
    <v-container fluid class="fill-height" style="background-color: #FEFCE9">
        <v-row>
            <v-col cols="5">
                <v-img
                    src="../assets/cerdasia.png"
                    width="150"
                    >
                </v-img>
                <v-card-title class="align-center justify-center text-h4">Sign Up</v-card-title>
                <p class="text-center font-weight-light">Create your account</p>
                <v-row>
                    <v-col>
                        <v-card-text class="font-weight-light">First Name</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-card-text class="font-weight-light">Last Name</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
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
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-card-text class="font-weight-light">Phone No.</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                    <v-card-text class="font-weight-light">Password</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-card-text class="font-weight-light">Confirm Password</v-card-text>
                        <v-text-field
                            outlined
                            rounded
                            required
                            color="#FF5E3C"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="pb-5" justify="center">
                    <v-checkbox
                        label="I agree with the terms of use"
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
                        Sign Up
                    </v-btn>
                </v-row>
                <p class="text-center font-weight-light">or sign up with other accounts?</p>
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
                <p class="text-center font-weight-light">Already have an account?</p>
                &emsp;
                <a @click="redirectSignIn()" class="text-center font-weight-light orange--text">Click here to Sign In.</a>
                </v-row>
            </v-col>

            <v-col cols="7" style="padding: 0px">
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
                                :min-height="initHeight2">
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