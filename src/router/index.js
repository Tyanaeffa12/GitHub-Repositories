import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReposView from "../views/ReposView";
import RepoView from "../views/RepoView";
import ErrorView from "../views/ErrorView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/repos",
    name: "Repos",
    component: ReposView,
    component: () => import("../views/ReposView.vue"),
  },
  {
    path: "/repo/:name",
    name: "Repo",
    component: RepoView,
    component: () => import("../views/RepoView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: ErrorView,
    component: () => import("../views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
