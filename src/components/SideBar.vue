<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      color="#FFFFFF"
    >
      <v-list nav dense>
        <v-list-item class="pt-6 pb-10">
          <v-row class="pt-1 pl-4 pr-8">
            <v-img
              src="../assets/dashboard/logoCerdasia.svg"
              height="30"
              contain
            >
            </v-img>
          </v-row>
        </v-list-item>

        <v-row v-for="(parent, i) in menu" :key="i">
          <v-col>
            <v-list-item
              active-class="deep-orange rounded-lg"
              color="white"
              v-if="parent.SubMenu.length == 0"
              link
              :to="parent.Route"
            >
              <v-list-item-icon>
                <v-icon>{{ parent.Icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <h3 style="font-weight: regular">{{ parent.Name }}</h3>
              </v-list-item-title>
            </v-list-item>

            <v-list-group v-else no-action color="deep-orange">
              <v-icon slot="prependIcon">{{ parent.Icon }}</v-icon>
              <template v-slot:activator>
                <v-list-item-title>
                  <h3 class="black--text">{{ parent.Name }}</h3>
                </v-list-item-title>
              </template>
              <v-list-item
                active-class="deep-orange rounded-lg"
                color="white"
                link
                :to="sub.Route"
                v-for="(sub, i) in parent.SubMenu"
                :key="i"
              >
                <v-list-item-title>
                  <h4>{{ sub.Name }}</h4>
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-col>
        </v-row>
      </v-list>

      <v-list rounded style="position: absolute; bottom: 0" flat dense nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <a
              @click="redirectSignUp()"
              class="font-weight-bold black--text text-h7"
              >Keluar</a
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    menu: [],
    drawer: true,
    mini: false,
    navigation: [
      {
        id: 3,
        type: 1,
        name: "Dashboard",
        route: "/Dashboard",
        parentNavigation_Id: 0,
        iconClass: "mdi-view-dashboard",
        order: 1,
        visible: 1,
      },
      {
        id: 1,
        type: 1,
        name: "Learning",
        route: null,
        parentNavigation_Id: 0,
        iconClass: "mdi-book",
        order: 1,
        visible: 1,
      },
      {
        id: 2,
        type: 1,
        name: "Quiz",
        route: null,
        parentNavigation_Id: 0,
        iconClass: "mdi-controller-classic",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Alfabet",
        route: "/LearningAlfabet",
        parentNavigation_Id: 1,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Suku Kata 1",
        route: "/LearningSukuKata1",
        parentNavigation_Id: 1,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Suku Kata 2",
        route: "/LearningSukuKata2",
        parentNavigation_Id: 1,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Kalimat",
        route: "/LearningKalimat",
        parentNavigation_Id: 1,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Alfabet",
        route: "/QuizAlfabet",
        parentNavigation_Id: 2,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Suku Kata 1",
        route: "/QuizSukuKata1",
        parentNavigation_Id: 2,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Suku Kata 2",
        route: "/QuizSukuKata2",
        parentNavigation_Id: 2,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 0,
        type: 2,
        name: "Kalimat",
        route: "/QuizKalimat",
        parentNavigation_Id: 2,
        iconClass: "mdi-message-cog-outline",
        order: 1,
        visible: 1,
      },
      {
        id: 4,
        type: 1,
        name: "Buku Cerita",
        route: "/BukuCerita",
        parentNavigation_Id: 0,
        iconClass: "mdi-book-open-variant",
        order: 1,
        visible: 1,
      },
    ],
  }),
  mounted() {
    this.sidebar();
  },
  methods: {
    sidebar() {
      this.menu = [];
      this.navigation.forEach((item) => {
        if (item.type === 1) {
          const itemMenu = {
            Name: item.name,
            Route: item.route,
            Icon: item.iconClass,
            SubMenu: [],
          };
          this.navigation.forEach((subMenu) => {
            if (subMenu.parentNavigation_Id === item.id) {
              const itemSubMenu = {
                Name: subMenu.name,
                Route: subMenu.route,
              };
              itemMenu.SubMenu.push(itemSubMenu);
            }
          });
          this.menu.push(itemMenu);
          this.$router.replace("/Dashboard");
        }
      });
    },
    redirectSignUp() {
      this.$router.push("/SignUp");
    },
  },
};
</script>

<style></style>
