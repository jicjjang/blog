import Vuex from 'vuex'
import ContentsMap from '../posts/contentsMap.js'

const store = () => new Vuex.Store({
  state: {
    // baseUrl: 'http://localhost:3000/blog',
    baseUrl: 'https://jicjjang.github.io/blog',
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
