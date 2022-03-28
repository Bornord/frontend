import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: 'basicDefaultToken',
    prenom: '',
    nom: '',
  },
  getters: {
    extractedToken: state => {
      return `${state.token}`
    },
    getPrenom: state => {
      return `${state.prenom}`
    },
    getNom: state => {
      return `${state.nom}`
    }
  },
  mutations: {
    MAJ_token(state, payload) {
      state.token = payload;
    },
    MAJ_prenom(state, payload) {
      state.prenom = payload;
    },
    MAJ_nom(state, payload) {
      state.nom = payload;
    },
    DELETE_token(state) {
      state.token = 'basicDefaultToken';
      state.prenom = '';
      state.nom = '';
    }
  },
  actions: {
    MAJ_TOKEN (context,payload) {
      context.commit('MAJ_token', payload);
    },
    MAJ_PRENOM (context,payload) {
      context.commit('MAJ_prenom', payload);
    },
    MAJ_NOM (context,payload) {
      context.commit('MAJ_nom', payload);
    },
    DELETE_TOKEN (context) {
      context.commit('DELETE_token');
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
