import Vuex from 'vuex'
import ContentsMap from '../contentsMap.js'

const store = () => new Vuex.Store({
  state: {
    baseUrl: process.env.NODE_ENV !== 'development' ? 'https://jicjjang.github.io/blog' : 'http://localhost:3000/blog',
    postList: ContentsMap.post,
    categoryList: ContentsMap.category
  },
  getters: {
    baseUrl: state => {
      return state.baseUrl
    },
    postList: state => {
      return state.postList
    },
    categoryList: state => {
      return state.categoryList
    }
  },
  mutations: {

  },
  actions: {

  }
});

export default store
