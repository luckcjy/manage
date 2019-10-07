import Vue from "vue";
import Vuex from "vuex";
import router, { allRoute, notfonund } from "../route/router";

import { getUserInf } from "../api/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showRoute: [],
    firstRender: true
  },
  mutations: {
    // 设置路由
    getRoute(state, role) {
      // 只允许触发一次
      if (state.firstRender) {
        //根据权限动态添加路由列表
        let children = allRoute.children.filter(item =>
          item.meta.role.includes(role)
        );
        allRoute.index[0].children = children;
        // 确认展示的路由列表
        state.showRoute = allRoute.index;
        router.addRoutes([...state.showRoute, notfonund]);
        state.firstRender = false;
      }
    }
  },
  getters: {
    // 生成渲染列表的路由数组
    showList(state) {
      let arr = [];
      state.showRoute[0].children.forEach(route => {
        let len = route.path.split("/").length;
        if (len == 2) {
          arr[arr.length] = route;
          arr[arr.length - 1].index = arr.length.toString();
        } else {
          if (arr[arr.length - 1].children) {
            arr[arr.length - 1].children.push(route);
          } else {
            arr[arr.length - 1].children = [route];
          }
        }
      });
      return arr;
    }
  },
  actions: {
    getRole({ commit }, token) {
      getUserInf(token) //验证用户信息,获取权限
        .then(({ role }) => {
          commit("getRoute", role);
        });
    }
  }
});
