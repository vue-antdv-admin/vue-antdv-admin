import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import { routes } from '/@/routes/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export {
  router,
};
