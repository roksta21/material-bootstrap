// Routes
const routes = [
    { path: '/', component: require('./components/Test.vue')}
];

// Components
Vue.component('side-bar', require('./components/Sidebar.vue'));
Vue.component('main-nav', require('./components/MainNav.vue'));

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');