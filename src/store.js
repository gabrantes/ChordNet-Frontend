import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentVoices: [
      {'val': null, 'note': null, 'withinRange': null},
      {'val': null, 'note': null, 'withinRange': null},
      {'val': null, 'note': null, 'withinRange': null},
      {'val': null, 'note': null, 'withinRange': null},
    ]
  },

  getters: {
    getCurrentVoices: state => state.currentVoices,
  },

  mutations: {
    SET_CURNOTE: (state, payload) => {
      state.currentVoices[payload.id].val = payload.val
      state.currentVoices[payload.id].note = payload.note
      state.currentVoices[payload.id].withinRange = payload.withinRange
    }
  },

  actions: {
    setCurNote: (context, payload) => {
      if (payload.id >= 0 && payload.id < 4)
        context.commit("SET_CURNOTE", payload)
    }
  }
  })