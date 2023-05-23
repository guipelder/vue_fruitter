import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import myCartView from '../views/MyCartView.vue'
import accountView from  '../views/AccountView.vue'
import catagoryView from '../views/CatagoryView.vue'
import descriptionView from '../views/descriptionView.vue'
import { formatWithCursor } from 'prettier'
import fruit from '../components/Fruit.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutus',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/mycarts',
      name: 'mycarts',
      component: myCartView
  },
  {
    path: '/account',
    name:'account',
    component:accountView
  },
  {
    path: '/catagory',
    name : 'catagory',
    component:   catagoryView,
//     children: [
//       {
//               path: 'description/:id',
//               name:'description',
//               component: descriptionView,
//       },
// ]
  },
  {
    path:'/catagory/description/:id',
    name:'description',
    component: descriptionView,

  }
  ]
})

export default router
