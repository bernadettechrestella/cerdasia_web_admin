<template>
    <div>
        <v-row class="pt-4">
            <v-col>
                <v-btn
                    rounded
                    color="#FF5E3C"
                    class="white--text"
                    width="550">
                        Upload Quiz
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    rounded
                    outlined
                    width="550"
                    class="orange--text">
                    <v-icon
                        color="#FF5E3C">
                        mdi-plus-circle
                    </v-icon>
                    &emsp;
                        Tambah Quiz Baru
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name : 'ButtonUploadQuiz'
}
</script>