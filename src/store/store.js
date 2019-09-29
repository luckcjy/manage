import Vue from 'vue'
import Vuex from 'vuex'
import router,{allRoute,notfonund} from '../route/router'

import { getUserInf} from "../api/http"


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    showRoute:[],
    allRoute,
    firstRender:true
  },
  mutations: {
    getRoute(state,role){
      //根据权限动态添加路由列表
      let children = state.allRoute.children.filter(item => item.meta.role.includes(role))
      state.allRoute.index[0].children = children;
      // 确认展示的路由列表
      state.showRoute =  state.allRoute.index
      router.addRoutes([...state.showRoute,notfonund])
    }
  },
  getters:{
    showList(state){
      if(state.firstRender){
      let arr = []
      state.showRoute[0].children.forEach(route => {
        let len = route.path.split("/").length
        if(len == 2){
          arr[arr.length] = route
         arr[arr.length-1].index = arr.length.toString()
        }
        else{
           if(arr[arr.length-1].children){
             arr[arr.length-1].children.push(route)
           }else{
             arr[arr.length-1].children = [route]
           }
           console.log(arr[arr.length-1].children)
        }
      });
      //修改首次渲染为false
      state.firstRender = false
      return arr
     }}
    
  },
  actions: {
    getRole({commit},token){
      getUserInf(token) //验证用户信息,获取权限
      .then(({role})=>{
        commit("getRoute",role)
      })
    }
  }
})
