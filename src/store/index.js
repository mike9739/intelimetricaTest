import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    restaurants : [],
    info:[],
    restaurantPages:[],
    page:1,
  },
  getters:{
    RESTAURANTS : state => {
      return state.restaurants;
    },
    INFO : state => {
      return state.info;
    },
    RESTAURANT_PAGES: state => {
      return state.restaurantPages;
    },
    PAGE:state => {
      return state.page
    }

  },
  mutations: {
    SET_RESTAURANTS(state,data) {
      state.restaurants = data;
    },
    SET_RESTAURANT_PAGES(state,data){
      state.restaurantPages = data
    },
    SET_PAGE(state,data){
      state.page = data;
    },
    SET_INFO(state,data){
      state.info = data
    }
  },
  actions: {
    getData:async (context) => {

      try {
          axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
          axios.defaults.headers.get['Access-Control-Allow-Origin'] ='*';
        let {data} = await axios.get('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json',{headers: {'Access-Control-Allow-Origin': 'http:localhost:8080'}});

        context.commit('SET_RESTAURANTS',data);

      }catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  },
})
