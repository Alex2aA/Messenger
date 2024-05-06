import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import RegisterPage from './components/RegisterPage.vue'
import NotFoundPage from './components/NotFoundPage.vue'

const router = createRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/registration',
    name: 'Register',
    component: RegisterPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundPage
  }
],
  history: createWebHistory()
})

router.beforeEach((to) => {
  var isAuthenticated = localStorage.getItem("auth_key")
  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      name: 'Register'
    }
  }
  if (to.meta.requiresAuth == false && isAuthenticated) {
    return {
      name: 'Home'
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')

