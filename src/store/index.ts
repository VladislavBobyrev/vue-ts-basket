import { createStore } from 'vuex'
import axios from '@/api/axios'

interface Requests {
  body: string,
  id: number,
  title: string,
  userId: number,
}

export default createStore({
  state: {
    data: [],
    basketItem: [],
  },
  getters: {
  },
  mutations: {
    SET_DATA(state:any, data:Requests[])
    {
      return state.data = data
    },
    UPDATE_BASKET(state: any, basketItems:Requests[])
    {
      return state.basketItems = basketItems
    },
  },
  actions: {
    async  getAsyncCard({ commit })
    {
      const data = await axios('posts/').then((i) => i.data)
      commit('SET_DATA', data)
    },
  },
  modules: {
  },
})