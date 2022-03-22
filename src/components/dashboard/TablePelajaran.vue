<template>
  <div class="pt-5 mt-14">
    <h2 class="mb-8 black--text">List Pelajaran</h2>
    <!-- list pelajaran -->
    <v-row class="white rounded">
      <!-- card  -->
      <v-col cols="3">
        <v-card
          class="elevation-0 pt-10 rounded-xl"
          color="#fdf9d3bf"
          height="280"
        >
          <center>
            <!-- ilustrasi -->
            <v-img
              src="../../assets/dashboard/Ilustrasi/pemula.svg"
              width="80"
              class="mb-2"
            >
            </v-img>
            <!-- kategori card -->
            <h3 style="font-size: 22px" class="">Pemula</h3>
            <p>(Alfabet)</p>

            <router-link to="/list-pelajaran/pemula"
              ><v-btn
                color="#FF5E3C"
                class="white--text caption text-capitalize elevation-0 px-8"
                rounded
                >Lihat detail</v-btn
              ></router-link
            >
          </center>
        </v-card>
      </v-col>
      <!-- end of card -->

      <!-- card  -->
      <v-col cols="3">
        <v-card
          class="elevation-0 pt-10 rounded-xl"
          color="#fdf9d3bf"
          height="280"
        >
          <center>
            <!-- ilustrasi -->
            <v-img
              src="../../assets/dashboard/Ilustrasi/mahir.svg"
              width="80"
              class="mb-2"
            >
            </v-img>
            <!-- kategori card -->
            <h3 style="font-size: 22px" class="">Mahir</h3>
            <p>(Suku kata)</p>
            <router-link to="/list-pelajaran/mahir"
              ><v-btn
                color="#FF5E3C"
                class="white--text caption text-capitalize elevation-0 px-8"
                rounded
                >Lihat detail</v-btn
              ></router-link
            >
          </center>
        </v-card>
      </v-col>
      <!-- end of card -->

      <!-- card  -->
      <v-col cols="3">
        <v-card
          class="elevation-0 pt-10 rounded-xl"
          color="#fdf9d3bf"
          height="280"
        >
          <center>
            <!-- ilustrasi -->
            <v-img
              src="../../assets/dashboard/Ilustrasi/cakap.svg"
              width="80"
              class="mb-2"
            >
            </v-img>
            <!-- kategori card -->
            <h3 style="font-size: 22px" class="">Cakap</h3>
            <p>(Kata)</p>
            <router-link to="/list-pelajaran/cakap"
              ><v-btn
                color="#FF5E3C"
                class="white--text caption text-capitalize elevation-0 px-8"
                rounded
                >Lihat detail</v-btn
              ></router-link
            >
          </center>
        </v-card>
      </v-col>
      <!-- end of card -->

      <!-- card  -->
      <v-col cols="3">
        <v-card
          class="elevation-0 pt-10 rounded-xl"
          color="#fdf9d3bf"
          height="280"
        >
          <center>
            <!-- ilustrasi -->
            <v-img
              src="../../assets/dashboard/Ilustrasi/terampil.svg"
              width="80"
              class="mb-2"
            >
            </v-img>
            <!-- kategori card -->
            <h3 style="font-size: 22px" class="">Terampil</h3>
            <p>(Kalimat)</p>
            <router-link to="/list-pelajaran/terampil"
              ><v-btn
                color="#FF5E3C"
                class="white--text caption text-capitalize elevation-0 px-8"
                rounded
                >Lihat detail</v-btn
              ></router-link
            >
          </center>
        </v-card>
      </v-col>
      <!-- end of card -->
    </v-row>
    <!-- end of list pelajaran -->
  </div>
</template>

<script>
export default {
  name: "TablePelajaran",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
a {
  text-decoration: none;
}

.style-1 {
  background-color: white;
}
.style-2 {
  background-color: #fefce9;
}
.data-table {
  color: #ff5e3c;
}
</style>
