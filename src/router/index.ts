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
      ],
    },
  ],
});

export default router;
