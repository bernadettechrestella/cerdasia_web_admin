<template>
  <div class="mb-12">
    <!-- title -->
    <v-row class="mx-12 my-12">
      <!-- left arrow -->
      <svg
        style="cursor: pointer"
        @click="back"
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.735 12.8484L7.58337 26.0001L20.735 39.1517"
          stroke="#0A0A0A"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.4167 26H7.95166"
          stroke="#0A0A0A"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- end of left arrow -->

      <div class="ml-8">
        <h2 class="black--text">List Quiz</h2>
        <h3 class="font-weight-regular">Cakap (Kata)</h3>
      </div>
    </v-row>
    <!-- end of title -->

    <!-- pertanyaan quiz -->
    <div class="text-center" style="width: 564px">
      <!-- subtitle -->
      <div class="text-left ml-16 mb-4 d-flex align-center">
        <svg
          class="mr-4"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="6" fill="#FF5E3C" />
        </svg>

        <h3>Pertanyaan</h3>
      </div>
      <!-- end of subtitle -->

      <!-- table -->
      <div class="ml-16 pb-12 white box-table" style="width: 648px">
        <table>
          <!-- judul tabel -->
          <tr height="40px" class="deep-orange--text text-left">
            <th width="100px">ID</th>
            <th width="100px">Level</th>
            <th width="200px">Tipe Pertanyaan</th>
            <th width="200px">Pertanyaan</th>
          </tr>
          <!-- end of judul tabel -->

          <!-- isi tabel -->
          <tr class="text-left">
            <td>1G1</td>
            <td>1</td>
            <td>Gambar</td>
            <td>image1.png</td>
          </tr>

          <tr class="text-left">
            <td>1G2</td>
            <td>2</td>
            <td>Gambar</td>
            <td>image1.png</td>
          </tr>

          <tr class="text-left">
            <td>1G3</td>
            <td>3</td>
            <td>Teks</td>
            <td>Manakah yang A?</td>
          </tr>
          <!-- end of isi tabel -->
        </table>
      </div>
      <!-- end of table -->

      <!-- pagination -->
      <div class="mt-6 ml-16 d-flex flex-row justify-center">
        <!-- left arrow -->
        <svg
          class="mt-1"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4697 16.5303C16.7626 16.8232 17.2374 16.8232 17.5303 16.5303C17.8232 16.2374 17.8232 15.7626 17.5303 15.4697L16.4697 16.5303ZM13 12L12.4697 11.4697C12.1768 11.7626 12.1768 12.2374 12.4697 12.5303L13 12ZM17.5303 8.53033C17.8232 8.23744 17.8232 7.76256 17.5303 7.46967C17.2374 7.17678 16.7626 7.17678 16.4697 7.46967L17.5303 8.53033ZM17.5303 15.4697L13.5303 11.4697L12.4697 12.5303L16.4697 16.5303L17.5303 15.4697ZM13.5303 12.5303L17.5303 8.53033L16.4697 7.46967L12.4697 11.4697L13.5303 12.5303Z"
            fill="#14181F"
          />
          <path
            d="M10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303C11.8232 16.2374 11.8232 15.7626 11.5303 15.4697L10.4697 16.5303ZM7 12L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L7 12ZM11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967C11.2374 7.17678 10.7626 7.17678 10.4697 7.46967L11.5303 8.53033ZM11.5303 15.4697L7.53033 11.4697L6.46967 12.5303L10.4697 16.5303L11.5303 15.4697ZM7.53033 12.5303L11.5303 8.53033L10.4697 7.46967L6.46967 11.4697L7.53033 12.5303Z"
            fill="#14181F"
          />
        </svg>
        <!-- end of left arrow -->

        <!-- step -->
        <div class="pagination-step pagination-step-active font-weight-regular">
          1
        </div>
        <div class="pagination-step font-weight-regular">2</div>
        <div class="pagination-step font-weight-regular">3</div>
        <div class="pagination-step font-weight-regular">4</div>
        <div class="pagination-step font-weight-regular">5</div>
        <!-- end of step -->

        <!-- right arrow -->
        <svg
          class="mt-1"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5303 7.46967C13.2374 7.17678 12.7626 7.17678 12.4697 7.46967C12.1768 7.76256 12.1768 8.23744 12.4697 8.53033L13.5303 7.46967ZM17 12L17.5303 12.5303C17.8232 12.2374 17.8232 11.7626 17.5303 11.4697L17 12ZM12.4697 15.4697C12.1768 15.7626 12.1768 16.2374 12.4697 16.5303C12.7626 16.8232 13.2374 16.8232 13.5303 16.5303L12.4697 15.4697ZM12.4697 8.53033L16.4697 12.5303L17.5303 11.4697L13.5303 7.46967L12.4697 8.53033ZM16.4697 11.4697L12.4697 15.4697L13.5303 16.5303L17.5303 12.5303L16.4697 11.4697Z"
            fill="#14181F"
          />
          <path
            d="M7.53033 7.46967C7.23744 7.17678 6.76256 7.17678 6.46967 7.46967C6.17678 7.76256 6.17678 8.23744 6.46967 8.53033L7.53033 7.46967ZM11 12L11.5303 12.5303C11.8232 12.2374 11.8232 11.7626 11.5303 11.4697L11 12ZM6.46967 15.4697C6.17678 15.7626 6.17678 16.2374 6.46967 16.5303C6.76256 16.8232 7.23744 16.8232 7.53033 16.5303L6.46967 15.4697ZM6.46967 8.53033L10.4697 12.5303L11.5303 11.4697L7.53033 7.46967L6.46967 8.53033ZM10.4697 11.4697L6.46967 15.4697L7.53033 16.5303L11.5303 12.5303L10.4697 11.4697Z"
            fill="#14181F"
          />
        </svg>
        <!-- end of right arrow -->
      </div>
      <!-- end of pagination -->
    </div>

    <v-row align="left" class="ml-16 mt-8 mb-8">
      <router-link to="/QuizKata">
        <v-btn
          rounded
          color="#FF5E3C"
          class="white--text text-capitalize py-6 elevation-0"
          width="264px"
        >
          <svg
            class="mr-2"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11.5767H11V15.5767H9V11.5767H5V9.57666H9V5.57666H11V9.57666H15V11.5767ZM10 0.57666C8.68678 0.57666 7.38642 0.835318 6.17317 1.33786C4.95991 1.84041 3.85752 2.57701 2.92893 3.50559C1.05357 5.38096 0 7.9245 0 10.5767C0 13.2288 1.05357 15.7724 2.92893 17.6477C3.85752 18.5763 4.95991 19.3129 6.17317 19.8155C7.38642 20.318 8.68678 20.5767 10 20.5767C12.6522 20.5767 15.1957 19.5231 17.0711 17.6477C18.9464 15.7724 20 13.2288 20 10.5767C20 9.26344 19.7413 7.96308 19.2388 6.74983C18.7362 5.53657 17.9997 4.43418 17.0711 3.50559C16.1425 2.57701 15.0401 1.84041 13.8268 1.33786C12.6136 0.835318 11.3132 0.57666 10 0.57666Z"
              fill="white"
            />
          </svg>
          Tambah Pertanyaan Quiz
        </v-btn>
      </router-link>
    </v-row>
    <!-- end of pertanyaan quiz -->

    <!-- jawaban quiz -->
    <div class="text-center mt-16" style="width: 564px">
      <!-- subtitle -->
      <div class="text-left ml-16 mb-4 d-flex align-center">
        <svg
          class="mr-4"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="6" fill="#FF5E3C" />
        </svg>

        <h3>Jawaban</h3>
      </div>
      <!-- end of subtitle -->

      <!-- table -->
      <div class="ml-16 pb-12 white box-table" style="width: 924px">
        <table>
          <!-- judul tabel -->
          <tr height="40px" class="deep-orange--text text-left">
            <th width="100px">ID</th>
            <th width="100px">Level</th>
            <th width="200px">Tipe Jawaban</th>
            <th width="150px">Opsi A</th>
            <th width="150px">Opsi B</th>
            <th width="150px">Opsi C</th>
            <th width="150px">Opsi D</th>
            <th width="250px">Jawaban</th>
          </tr>
          <!-- end of judul tabel -->

          <!-- isi tabel -->
          <tr class="text-left">
            <td>1G1</td>
            <td>1</td>
            <td>Text</td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>C</td>
          </tr>
          <tr class="text-left">
            <td>1G1</td>
            <td>1</td>
            <td>Text</td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>C</td>
          </tr>
          <tr class="text-left">
            <td>1G1</td>
            <td>1</td>
            <td>Text</td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>C</td>
          </tr>
          <!-- end of isi tabel -->
        </table>
      </div>
      <!-- end of table -->

      <!-- pagination -->
      <div class="mt-6 ml-16 d-flex flex-row justify-center">
        <!-- left arrow -->
        <svg
          class="mt-1"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4697 16.5303C16.7626 16.8232 17.2374 16.8232 17.5303 16.5303C17.8232 16.2374 17.8232 15.7626 17.5303 15.4697L16.4697 16.5303ZM13 12L12.4697 11.4697C12.1768 11.7626 12.1768 12.2374 12.4697 12.5303L13 12ZM17.5303 8.53033C17.8232 8.23744 17.8232 7.76256 17.5303 7.46967C17.2374 7.17678 16.7626 7.17678 16.4697 7.46967L17.5303 8.53033ZM17.5303 15.4697L13.5303 11.4697L12.4697 12.5303L16.4697 16.5303L17.5303 15.4697ZM13.5303 12.5303L17.5303 8.53033L16.4697 7.46967L12.4697 11.4697L13.5303 12.5303Z"
            fill="#14181F"
          />
          <path
            d="M10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303C11.8232 16.2374 11.8232 15.7626 11.5303 15.4697L10.4697 16.5303ZM7 12L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L7 12ZM11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967C11.2374 7.17678 10.7626 7.17678 10.4697 7.46967L11.5303 8.53033ZM11.5303 15.4697L7.53033 11.4697L6.46967 12.5303L10.4697 16.5303L11.5303 15.4697ZM7.53033 12.5303L11.5303 8.53033L10.4697 7.46967L6.46967 11.4697L7.53033 12.5303Z"
            fill="#14181F"
          />
        </svg>
        <!-- end of left arrow -->

        <!-- step -->
        <div class="pagination-step pagination-step-active font-weight-regular">
          1
        </div>
        <div class="pagination-step font-weight-regular">2</div>
        <div class="pagination-step font-weight-regular">3</div>
        <div class="pagination-step font-weight-regular">4</div>
        <div class="pagination-step font-weight-regular">5</div>
        <!-- end of step -->

        <!-- right arrow -->
        <svg
          class="mt-1"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5303 7.46967C13.2374 7.17678 12.7626 7.17678 12.4697 7.46967C12.1768 7.76256 12.1768 8.23744 12.4697 8.53033L13.5303 7.46967ZM17 12L17.5303 12.5303C17.8232 12.2374 17.8232 11.7626 17.5303 11.4697L17 12ZM12.4697 15.4697C12.1768 15.7626 12.1768 16.2374 12.4697 16.5303C12.7626 16.8232 13.2374 16.8232 13.5303 16.5303L12.4697 15.4697ZM12.4697 8.53033L16.4697 12.5303L17.5303 11.4697L13.5303 7.46967L12.4697 8.53033ZM16.4697 11.4697L12.4697 15.4697L13.5303 16.5303L17.5303 12.5303L16.4697 11.4697Z"
            fill="#14181F"
          />
          <path
            d="M7.53033 7.46967C7.23744 7.17678 6.76256 7.17678 6.46967 7.46967C6.17678 7.76256 6.17678 8.23744 6.46967 8.53033L7.53033 7.46967ZM11 12L11.5303 12.5303C11.8232 12.2374 11.8232 11.7626 11.5303 11.4697L11 12ZM6.46967 15.4697C6.17678 15.7626 6.17678 16.2374 6.46967 16.5303C6.76256 16.8232 7.23744 16.8232 7.53033 16.5303L6.46967 15.4697ZM6.46967 8.53033L10.4697 12.5303L11.5303 11.4697L7.53033 7.46967L6.46967 8.53033ZM10.4697 11.4697L6.46967 15.4697L7.53033 16.5303L11.5303 12.5303L10.4697 11.4697Z"
            fill="#14181F"
          />
        </svg>
        <!-- end of right arrow -->
      </div>
      <!-- end of pagination -->
    </div>

    <v-row align="left" class="ml-16 mt-8">
      <router-link to="/QuizKata/jawaban">
        <v-btn
          rounded
          color="#FF5E3C"
          class="white--text text-capitalize py-6 elevation-0"
          width="264px"
        >
          <svg
            class="mr-2"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11.5767H11V15.5767H9V11.5767H5V9.57666H9V5.57666H11V9.57666H15V11.5767ZM10 0.57666C8.68678 0.57666 7.38642 0.835318 6.17317 1.33786C4.95991 1.84041 3.85752 2.57701 2.92893 3.50559C1.05357 5.38096 0 7.9245 0 10.5767C0 13.2288 1.05357 15.7724 2.92893 17.6477C3.85752 18.5763 4.95991 19.3129 6.17317 19.8155C7.38642 20.318 8.68678 20.5767 10 20.5767C12.6522 20.5767 15.1957 19.5231 17.0711 17.6477C18.9464 15.7724 20 13.2288 20 10.5767C20 9.26344 19.7413 7.96308 19.2388 6.74983C18.7362 5.53657 17.9997 4.43418 17.0711 3.50559C16.1425 2.57701 15.0401 1.84041 13.8268 1.33786C12.6136 0.835318 11.3132 0.57666 10 0.57666Z"
              fill="white"
            />
          </svg>

          Tambah Jawaban Quiz
        </v-btn>
      </router-link>
    </v-row>
    <!-- end of jawaban quiz -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.pagination-step {
  margin: 0px 12px;
  padding: 6px 8px;
}

.pagination-step-active {
  border-bottom: 4px solid #ff5e3c;
}

.box-table {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

table {
  padding: 12px;
  border-collapse: separate;
  border-spacing: 0 0.5em;
}

tr {
  border-radius: 20px;
}

td {
  border-spacing: 20px 20px;
  padding: 14px;
  background-color: rgba(255, 234, 216, 0.5);
}

tr th {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
}

td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
td:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
