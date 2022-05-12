import Vue from "vue";
import Router from "vue-router";
import Portfolio from "./pages/portfolio.vue";
import Information from "./pages/information.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "profile",
      component: Portfolio
    },
    {
      path: "/contact",
      name: "contact",
      component: Information
    }
  ]
});
