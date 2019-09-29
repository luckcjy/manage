import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login.vue'
import Index from "../pages/index/index.vue"

Vue.use(VueRouter)

let flag = true;

let router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
   
  ]
})
//需要权限管理的路由
export const allRoute = {
  index: [
    {
      path: "/",
      name: "index",
      component: Index,
      redirect: '/goods',
    }
  ],
  // 导航目录
  // 二级页面
  children: [
    {
      path:"/goods",
      redirect:"/goods/goodslist",
      name:"goods",
      meta: {
        role: ["admin", "edit"],
        title: "商品"
      }
    },
    {
      path: '/goods/goodslist',
      name: 'goodslist',
      component: () => import('../pages/goodsmanage/goodlist.vue'),
      meta: {
        role: ["admin", "edit"],
        title: "商品管理"
      }
    },
    {
      path: '/goods/addgoods',
      name: 'addgoods',
      component: () => import('../pages/goodsmanage/addgoods.vue'),
      meta: {
        role: ["admin", "edit"],
        title: "添加商品"
      }
    },
    {
      path: '/goods/editgoods',
      name: 'editgoods',
      component: () => import('../pages/goodsmanage/editgoods.vue'),
      meta: {
        role: ["admin", "edit"],
        title: "修改商品"
      }
    },
    {
      path:"/user",
      redirect:"/user/userlist",
      name:"user",
      meta: {
        role: ["admin"],
        title: "用户"
      }
    },
    {
      path: '/user/userlist',
      name: 'userlist',
      component: () => import('../pages/user/userlist.vue'),
      meta: {
        role: ["admin"],
        title: "用户管理"
      }
    },
    {
      path: '/user/edituser',
      name: 'edituser',
      component: () => import('../pages/user/edituser.vue'),
      meta: {
        role: ["admin"],
        title: "修改用户"
      }
    },
    {
      path: '/user/adduser',
      name: 'adduser',
      component: () => import('../pages/user/adduser.vue'),
      meta: {
        role: ["admin"],
        title: "添加用户"
      }
    },
  ]
}

// 404
 export const notfonund = {
      path: '*',
      name: 'notfound',
      component: () => import('../pages/notfound.vue')
    }

//路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    // token 存在加载路由
    if(flag && from.path != "/login"){
      setTimeout(() => {
        flag = false;
        router.app.$store.dispatch("getRole","role")
      });
    }


    if (to.path == "/login") {
      next({ path: '/' })
    } else {
      next()
    }

  } else {
    // token不存在则直接进入登录页
    if (to.path != "/login") {
      next("/login")
    } else {
      next()
    }
  }
})




export default router