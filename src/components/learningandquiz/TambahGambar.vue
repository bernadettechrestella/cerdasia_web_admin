<template>
    <div>
        <h2 class="pb-3">Tambahkan Aset Gambar</h2>
        <v-card outlined>
            <v-row class="pa-5">
                <v-col class="pl-5 pr-5">
                    <v-card class="text-center" max-height="300" width="100%">
                        <v-file-input
                            class="justify-center"
                            accept="image/png, image/jpeg, image/bmp"
                            prepend-icon="mdi-camera"
                            label="Input Gambar"
                            hide-input
                        ></v-file-input>
                        <v-card-text style="color:#FF5E3C">Input Gambar</v-card-text>
                    </v-card>
                </v-col>
                <v-col class="pl-5 pr-5">
                    <v-card class="text-center" max-height="300" width="100%">
                        <v-file-input
                            class="justify-center"
                            accept="image/png, image/jpeg, image/bmp"
                            prepend-icon="mdi-camera"
                            label="Input Gambar"
                            hide-input
                        ></v-file-input>
                        <v-card-text style="color:#FF5E3C">Input Gambar</v-card-text>
                    </v-card>
                </v-col>
                <v-col class="pl-5 pr-5">
                    <v-card class="text-center" max-height="300" width="100%">
                        <v-file-input
                            class="justify-center"
                            accept="image/png, image/jpeg, image/bmp"
                            prepend-icon="mdi-camera"
                            label="Input Gambar"
                            hide-input
                        ></v-file-input>
                        <v-card-text style="color:#FF5E3C">Input Gambar</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'TambahGambar'
}
</script>

<style>
    .h3 {
        color: #FF5E3C;
    }
</style>