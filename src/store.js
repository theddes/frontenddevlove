import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    add (state, article) {
      article.Content = article.Content.replace(/(?:\r\n|\r|\n)/g, '<br>')
      state.articles.push(article)
    },
    emptyArticles (state) {
      state.articles = []
    }
  },
  actions: {

  },
  getters: {
    articles: state => {
      return state.articles
    }
  }
})
