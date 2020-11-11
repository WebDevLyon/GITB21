import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/player",
    name: "Player",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Player.vue"),
  },

  {
    path: "/player2",
    name: "Player2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Player2.vue"),
  },
  {
    path: "/tournois",
    name: "Tournois",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tournois.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/id",
    name: "IdView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IdView.vue"),
  },
  {
    path: "/config",
    name: "config",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Config.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
