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
        path: "/LearningAlfabet",
        name: "LearningAlfabet",
        component: () => import("../views/LearningAlfabet.vue"),
      },
      {
        path: "/LearningSukuKata1",
        name: "LearningSukuKata1",
        component: () => import("../views/LearningSukuKata1.vue"),
      },
      {
        path: "/LearningSukuKata2",
        name: "LearningSukuKata2",
        component: () => import("../views/LearningSukuKata2.vue"),
      },
      {
        path: "/LearningKalimat",
        name: "LearningKalimat",
        component: () => import("../views/LearningKalimat.vue"),
      },
      {
        path: "/QuizAlfabet",
        name: "QuizAlfabet",
        component: () => import("../views/QuizAlfabet.vue"),
      },
      {
        path: "/QuizKalimat",
        name: "QuizKalimat",
        component: () => import("../views/QuizKalimat.vue"),
      },
      {
        path: "/QuizSukuKata1",
        name: "QuizSukuKata1",
        component: () => import("../views/QuizSukuKata1.vue"),
      },
      {
        path: "/QuizSukuKata2",
        name: "QuizSukuKata2",
        component: () => import("../views/QuizSukuKata2.vue"),
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
