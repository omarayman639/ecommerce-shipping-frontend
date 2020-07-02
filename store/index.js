import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex, axios);

export default new Vuex.Store({

  state: {
    row: {},
    products: [],
    filteredProducts: []
  },

  mutations: {
    addRowData(state, payload) {
      state.row = payload;
    },

    getProducts(state, row) {
      state.products = row;
      state.filteredProducts = row;
    },

    filterProducts(state, payload) {
      state.filteredProducts =
        state.products.filter(row => row.product_name.indexOf(payload) > -1)
    }
  },

  actions: {
    getProducts(context) {
      axios.get('http://localhost:3000/api/products').then(response => {
        context.commit('getProducts', response.data);
      })
    },

    filterProducts(context, payload) {
      context.commit('filterProducts', payload);
    },

    register(commit, {
      email,
      password,
      firstname,
      lastname
    }) {
      var full_arabic_name = firstname + " " + lastname;
      axios.post('http://localhost:3000/api/signup', {
          email,
          password,
          full_arabic_name
        })
        .then((data, status) => {
          if (status === 201) console.log("Account Created")
        })
        .catch(error => {
          console.log(error)
        })
    },
  },

  modules: {},

})