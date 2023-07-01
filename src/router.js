import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/HomePage.vue';
import JobDetails from './pages/JobDetailsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/job-details/:id',
        name: 'JobDetails',
        component: JobDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;