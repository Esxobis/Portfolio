import { createRouter, createWebHistory } from "vue-router/dist/vue-router.esm-bundler";
import Portfolio from "./pages/portfolio.vue";
import Information from "./pages/information.vue";

const routes = [{ path: "/", name: "profile", component: Portfolio },
{ path: "/contact", name: "contact", component: Information }
];

export default createRouter({
  history: createWebHistory(),
  routes
});