import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/adminView.vue')
    }
    ,
    /*  */
    {
      path: '/vacunas',
      name: 'vacunas',
      component: () => import('../views/VacunasView.vue')
    }
    ,
    {
      path: '/informes',
      name: 'informes',
      component: () => import('../views/informesView.vue')
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: () => import('../views/administracionView.vue')
    }
    , {
      path: '/aplicaciones',
      name: 'aplicaciones',
      component: () => import('../views/aplicacionesView.vue')
    }, {
      path: '/entidades',
      name: 'entidades',
      component: () => import('../views/entidadesView.vue')
    }, {
      path: '/esquemas',
      name: 'esquemas',
      component: () => import('../views/esquemasView.vue')
    }, {
      path: '/almacen',
      name: 'almacen',
      component: () => import('../views/almacenView.vue')
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/usuariosView.vue')
    }
    ,
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/registroView.vue')
    },
    {
      path: '/parametros',
      name: 'parametros',
      component: () => import('../views/parametrosView.vue')
    }
    ,
    {
      path: '/traslados',
      name: 'traslados',
      component: () => import('../views/TrasladosView.vue')
    }
    ,
    {
      path: '/devoluciones',
      name: 'devoluciones',
      component: () => import('../views/DevolucionesView.vue')
    }
    ,
    {
      path: '/ingresos',
      name: 'ingresos',
      component: () => import('../views/IngresosView.vue')
    }
  ]
})

export default router
