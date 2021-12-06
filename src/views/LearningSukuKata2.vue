<template>
  <v-app>
    <v-container class="pa-6" fluid
      style="background-color:white">
      <h1>Belajar Suku Kata 2</h1>
      <LevelQuiz />
      <TambahGambar />
      <TambahSuara />
      <ButtonUploadPelajaran />
    </v-container>
  </v-app>
</template>

<script>
import LevelQuiz from '@/components/learningandquiz/LevelQuiz.vue';
import TambahGambar from '@/components/learningandquiz/TambahGambar.vue';
import TambahSuara from '@/components/learningandquiz/TambahSuara.vue';
import ButtonUploadPelajaran from '@/components/learningandquiz/ButtonUploadPelajaran.vue';

export default {
  name: 'LearningSukuKata2',

  components: {
    LevelQuiz,
    TambahGambar,
    TambahSuara,
    ButtonUploadPelajaran
  },

  data: () => ({
    item: [],
  }),
};
</script>

<style>
    .h2 {
        color: #FF5E3C;
    }
    h1 {
        color: #FF5E3C;
    }
</style>