import { createRouter, createWebHistory } from "vue-router";
import { route } from "./definition";
import Home from "@/components/Home.vue";
import Store from "@/components/store/Store.vue";
import NotFound from "@/components/notFound/NotFound.vue";


const routes = [
  { path: route.home, component: Home, name: "Home" },
  { path: route.store, component: Store, name: "Store" },
 { path: "/:pathMatch(.*)*", component: NotFound, name: "NotFound" }, // Ruta 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
