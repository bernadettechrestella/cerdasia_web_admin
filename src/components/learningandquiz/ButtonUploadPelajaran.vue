<template>
    <div>
        <v-row class="pt-4">
            <v-col>
                <v-btn
                    rounded
                    color="#FF5E3C"
                    class="white--text"
                    width="100%">
                        Upload Pelajaran
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    rounded
                    outlined
                    width="100%"
                    class="orange--text">
                    <v-icon
                        color="#FF5E3C">
                        mdi-plus-circle
                    </v-icon>
                    &emsp;
                        Tambah Pelajaran Baru
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name : 'ButtonUploadPelajaran'
}
</script>