<template>
    <div>
        <h2 class="pt-10 pb-3">Tambahkan Aset Suara</h2>
        <v-card outlined :class="`rounded${'-xl'}`">
            <v-row class="pt-6 pl-5 pr-5">
                <v-col>
                    <v-file-input
                        class="justify-center"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-plus-circle"
                        label="Input Suara"
                        rounded
                        outlined
                        dense
                        color="#FF5E3C"
                    ></v-file-input>
                </v-col>
                <v-col>
                    <v-file-input
                        class="justify-center"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-plus-circle"
                        label="Input Suara"
                        rounded
                        outlined
                        dense
                        color="#FF5E3C"
                    ></v-file-input>
                </v-col>
                <v-col>
                    <v-file-input
                        class="justify-center"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-plus-circle"
                        label="Input Suara"
                        outlined
                        rounded
                        dense
                        color="#FF5E3C"
                    ></v-file-input>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'TambahSuara'
}
</script>