import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../views/BookList.vue';
import BookCreate from '../views/BookCreate.vue';
import BookEdit from '../views/BookEdit.vue';
import LoginView from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/books', 
      meta: { requiresAuth: true }
    },
    
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { 
        requiresAuth: false,
        hideNavbar: true 
      }
    },

    {
      path: '/books',
      name: 'booklist',
      component: BookList,
      meta: { requiresAuth: true }
    },

    {
      path: '/books/create',
      name: 'BookCreate',
      component: BookCreate,
      meta: { requiresAuth: true }
    },

    {
      path: '/books/edit/:id', 
      name: 'BookEdit',
      component: BookEdit,
      meta: { requiresAuth: true }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
