import { createRouter, createWebHistory } from "vue-router"



import HomeItem from './components/HomeItem.vue'
import ProductItem from './components/ProductItem.vue'
import LoginItem from './components/LoginItem.vue'
import AboutItem from './components/AboutItem.vue'
import SingleItem from './components/SingleItem.vue'
import CardItem from './components/CardItem.vue'

const routes = [
    { path: '/', component: HomeItem },
    { path: '/products', component: ProductItem },
    { path: '/products/:id',  name: 'singlepage' , component: SingleItem },
    { path: '/login', component: LoginItem },
    { path: '/about', component: AboutItem },
    { path: '/card', component: CardItem }
  ]



  const router = createRouter({

    history: createWebHistory(),
    routes
     
  })

  export default router