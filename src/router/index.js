import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import Home from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/Dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/list-pelajaran/pemula",
        name: "list pelajaran-pemula",
        component: () => import("../views/list pelajaran/Pemula.vue"),
      },
      {
        path: "/list-pelajaran/mahir",
        name: "list pelajaran-mahir",
        component: () => import("../views/list pelajaran/Mahir.vue"),
      },
      {
        path: "/list-pelajaran/cakap",
        name: "list pelajaran-cakap",
        component: () => import("../views/list pelajaran/Cakap.vue"),
      },
      {
        path: "/list-pelajaran/terampil",
        name: "list pelajaran-terampil",
        component: () => import("../views/list pelajaran/Terampil.vue"),
      },
      {
        path: "/list-quiz/pemula",
        name: "list quiz-pemula",
        component: () => import("../views/list quiz/Pemula.vue"),
      },
      {
        path: "/list-quiz/mahir",
        name: "list quiz-mahir",
        component: () => import("../views/list quiz/Mahir.vue"),
      },
      {
        path: "/list-quiz/cakap",
        name: "list quiz-cakap",
        component: () => import("../views/list quiz/Cakap.vue"),
      },
      {
        path: "/list-quiz/terampil",
        name: "list quiz-terampil",
        component: () => import("../views/list quiz/Terampil.vue"),
      },
      {
        path: "/LearningAlfabet",
        name: "LearningAlfabet",
        component: () => import("../views/LearningAlfabet.vue"),
      },
      {
        path: "/LearningSukuKata",
        name: "LearningSukuKata",
        component: () => import("../views/LearningSukuKata.vue"),
      },
      {
        path: "/LearningKata",
        name: "LearningKata",
        component: () => import("../views/LearningKata.vue"),
      },
      {
        path: "/LearningKalimat",
        name: "LearningKalimat",
        component: () => import("../views/LearningKalimat.vue"),
      },
      {
        path: "/QuizAlfabet",
        name: "QuizAlfabet",
        component: () => import("../views/tambah quiz/alfabet/QuizAlfabet"),
      },
      {
        path: "/QuizAlfabet/pertanyaan",
        name: "QuizAlfabet",
        component: () =>
          import("../views/tambah quiz/alfabet/TambahPertanyaan"),
      },
      {
        path: "/QuizAlfabet/jawaban",
        name: "QuizAlfabet",
        component: () => import("../views/tambah quiz/alfabet/JawabanAlfabet"),
      },
      {
        path: "/QuizAlfabet/tambah-jawaban",
        name: "QuizAlfabet",
        component: () => import("../views/tambah quiz/alfabet/TambahJawaban"),
      },
      {
        path: "/QuizSukuKata",
        name: "QuizSukuKata",
        component: () => import("../views/tambah quiz/suku kata/QuizSukuKata"),
      },
      {
        path: "/QuizSukuKata/pertanyaan",
        name: "QuizSukuKata",
        component: () =>
          import("../views/tambah quiz/suku kata/TambahPertanyaan"),
      },
      {
        path: "/QuizSukuKata/jawaban",
        name: "QuizSukuKata",
        component: () =>
          import("../views/tambah quiz/suku kata/JawabanSukuKata"),
      },
      {
        path: "/QuizSukuKata/tambah-jawaban",
        name: "QuizSukuKata",
        component: () => import("../views/tambah quiz/suku kata/TambahJawaban"),
      },
      {
        path: "/QuizKata",
        name: "QuizKata",
        component: () => import("../views/tambah quiz/kata/QuizKata"),
      },
      {
        path: "/QuizKata/pertanyaan",
        name: "QuizKata",
        component: () => import("../views/tambah quiz/kata/TambahPertanyaan"),
      },
      {
        path: "/QuizKata/jawaban",
        name: "QuizKata",
        component: () => import("../views/tambah quiz/kata/JawabanKata"),
      },
      {
        path: "/QuizKata/tambah-jawaban",
        name: "QuizKata",
        component: () => import("../views/tambah quiz/kata/TambahJawaban"),
      },

      {
        path: "/QuizKalimat",
        name: "QuizKalimat",
        component: () => import("../views/tambah quiz/kalimat/QuizKalimat"),
      },
      {
        path: "/QuizKalimat/pertanyaan",
        name: "QuizKalimat",
        component: () =>
          import("../views/tambah quiz/kalimat/TambahPertanyaan"),
      },
      {
        path: "/QuizKalimat/jawaban",
        component: () => import("../views/tambah quiz/kalimat/JawabanKalimat"),
      },
      {
        path: "/QuizKalimat/tambah-jawaban",
        component: () => import("../views/tambah quiz/kalimat/TambahJawaban"),
      },
    ],
  },
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (to.path === '/') {
//       next()
//     // } else if (!roleUser(to.meta.requireRole) && to.path !== '/') {
//     //   next('/404')
//     } else {
//       next()
//     }
//   }
// })

export default router;
