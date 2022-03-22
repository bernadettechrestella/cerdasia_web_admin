<template>
  <div class="mb-12">
    <!-- title -->
    <v-row class="mx-12 my-12">
      <!-- left arrow -->
      <svg
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
        <h2 class="black--text">List Pelajaran</h2>
        <h3 class="regular--text">Pemula (Alfabet)</h3>
      </div>
    </v-row>
    <!-- end of title -->

    <!-- table -->
    <div class="ml-16 pb-12 white box-table" style="width: 564px">
      <table>
        <!-- judul tabel -->
        <tr height="40px" class="deep-orange--text">
          <th width="100px">Level</th>
          <th width="200px">Aset Gambar</th>
          <th width="300px">Aset Suara</th>
        </tr>
        <!-- end of judul tabel -->

        <!-- isi tabel -->
        <tr class="text-center">
          <td>1</td>
          <td>image1.png</td>
          <td>voice1.mp4</td>
        </tr>

        <tr class="text-center">
          <td>2</td>
          <td>image1.png</td>
          <td>voice4.mp4</td>
        </tr>

        <tr class="text-center">
          <td>3</td>
          <td>image1.png</td>
          <td>voice1.mp4</td>
        </tr>
        <tr class="text-center">
          <td>3</td>
          <td>image1.png</td>
          <td>voice1.mp4</td>
        </tr>
        <tr class="text-center">
          <td>3</td>
          <td>image1.png</td>
          <td>voice1.mp4</td>
        </tr>
        <!-- end of isi tabel -->
      </table>
    </div>
    <!-- end of table -->

    <!-- pagination -->
    <div class="">
      <!-- step -->

      <!-- end of step -->
    </div>
    <!-- end of pagination -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
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
  padding: 16px;
  background-color: rgba(253, 249, 211, 0.5);
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
