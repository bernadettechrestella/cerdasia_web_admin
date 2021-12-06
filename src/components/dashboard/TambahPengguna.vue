<template>
    <div class="pt-5 mt-5">
        <h3 class="pb-2">Tambahkan Pengguna Baru Cerdasia</h3>
        <v-row class="pt-4">
            <v-text-field
            rounded
            outlined
            label="Nama Pengguna"
            color="#FF5E3C"
            ></v-text-field>
        &emsp;
            <v-text-field
            rounded
            outlined
            label="Email"
            color="#FF5E3C"
          ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
            rounded
            outlined
            label="Password"
            color="#FF5E3C"
          ></v-text-field>
          &emsp;
            <v-text-field
            rounded
            outlined
            label="Konfirmasi Password"
            color="#FF5E3C"
          ></v-text-field>
        </v-row>
        <v-checkbox
            label="Dilindungi Autentifikasi 2 Faktor"
            color="#FF5E3C"
        ></v-checkbox>
        <!-- <v-col> -->
            <v-btn
                rounded
                class="white--text"
                color="#FF5E3C">Tambahkan Pengguna Baru</v-btn>
        <!-- </v-col> -->
    </div>
</template>

<script>
export default {
    name: 'TambahPengguna'
}
</script>