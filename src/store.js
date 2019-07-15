import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow:true,
  },
  mutations: {
    ShowTabbarMutation(state,payload){
      //显示tabbar
      state.isTabbarShow = payload
    },
    HideTabbarMutation(state,payload){
      //隐藏tabbar
      state.isTabbarShow = payload
    },
  },
  actions: {

  }
})
