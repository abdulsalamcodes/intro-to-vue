import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import PokemonPage from "./components/PokeMon.vue";
import CharacterPage from "./view/CharacterPage.vue";
import Counter from './view/BaseCounterPage.vue'
import { createPinia } from "pinia";
const routes = [
  { path: "/", component: CharacterPage },
  { path: "/counter", component: Counter },
  { path: "/pokedex", component: PokemonPage },
];

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
