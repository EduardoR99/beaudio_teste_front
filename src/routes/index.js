import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue' 
import DashboardPage from '../views/DashboardPage.vue'
import TaskListPage from '../views/TaskListPage.vue'

const routes = [
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: RegisterPage }, 
  { path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { requiresAuth: true } },
  { path: '/tasklist/:id', name: 'tasklist', component: TaskListPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogged = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !isLogged) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router