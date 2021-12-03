import { createRouter, createWebHashHistory } from 'vue-router'
// createWebHistory
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'home' } : null)
  } catch (e) {
    if (e.response.status === 401) next(authRoute ? null : { name: 'auth' })
  }
})
// createWebHistory

export default router
