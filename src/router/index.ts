import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "dashboard" },
    },
    {
      name: "admin",
      path: "/",
      component: AppLayout,
      redirect: { name: "dashboard" },
      children: [
        {
          name: "dashboard",
          path: "dashboard",
          component: () => import("../views/admin/dashboard/Dashboard.vue"),
        },
        {
          name: "todos",
          path: "todos",
          component: () => import("../views/admin/todos/Todos.vue"),
        },
        {
          name: "weather",
          path: "weather",
          component: () => import("../views/admin/weather/Weather.vue"),
        },
        {
          name: "profile",
          path: "profile",
          component: () => import("../views/admin/profile/Profile.vue"),
        },
      ],
    },
  ],
});

export default router;
