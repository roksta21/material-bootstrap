// Routes
const routes = [
    { path: '/', component: require('./pages/Welcome.vue')},
    { path: '/installation', component: require('./pages/Installation.vue')},
    { path: '/buttons', component: require('./pages/Buttons.vue')},
    { path: '/containers', component: require('./pages/Containers.vue')},
    { path: '/dialogs', component: require('./pages/Dialogs.vue')},
    { path: '/forms', component: require('./pages/Forms.vue')},
    { path: '/icons', component: require('./pages/Icons.vue')},
    { path: '/indicators', component: require('./pages/Indicators.vue')},
    { path: '/nav', component: require('./pages/Nav.vue')},
    { path: '/navs', component: require('./pages/Navs.vue')},
    { path: '/progress-bars', component: require('./pages/ProgressBars.vue')},
    { path: '/tables', component: require('./pages/Tables.vue')},
    { path: '/typography', component: require('./pages/Typography.vue')},
    { path: '/*', redirect: '/'}
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