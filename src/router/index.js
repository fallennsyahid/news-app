import { createRouter, createWebHistory } from "vue-router";
import NewsList from "../components/NewsList.vue";
import SearchNews from "../components/SearchNews.vue";

const routes = [
    { path: '/', name: 'NewsList', component: NewsList },
    { path: '/search-news', name: 'SearchNews', component: SearchNews },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router