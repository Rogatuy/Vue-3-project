import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/Main/Main.vue"),
    },
    {
      path: "/catalog/clothes",
      name: "clothes",
      component: () => import("../views/Catalog/catalog-clothes/CatalogClothes.vue"),
    },
    {
      path: "/catalog/shoes",
      name: "shoes",
      component: () => import("../views/Catalog/catalog-shoes/CatalogShoes.vue"),
    },
    {
      path: "/catalog/equipment",
      name: "equipment",
      component: () => import("../views/Catalog/catalog-equipment/CatalogEquipment.vue"),
    },
  ],
})

export default router
