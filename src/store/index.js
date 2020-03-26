import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: {},   // 用户登录信息
    questionList: []   // 题目存储列表
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
