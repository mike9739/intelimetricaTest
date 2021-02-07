<template>
<div>
  <v-row class="justify-center ">
    <v-img src="../assets/MELP.svg" class="subheading"  max-width="500" max-height="300"></v-img>
  </v-row>
  <v-row cols="12">
    <v-col >
      <div class=" text-center" >
        <v-toolbar width="300" floating>
          <v-text-field  class="mt-1" v-model="search" placeholder="Search in our list of restaurants" ></v-text-field>
          <v-btn outlined text class="ml-2" color="pink darken-2" @click="handlerFilterSetData"><v-icon>mdi-magnify</v-icon></v-btn>
        </v-toolbar>
      </div>
    </v-col>
  </v-row>



  <v-container fluid>
    <v-row dense>
      <v-col v-for="item in restaurant" v-bind:key="item.title" cols="3">
        <v-card class="mx-auto my-12" max-width="374">
                  <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                  <v-card-title>{{item.name}}</v-card-title>
                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating :value="item.rating" color="amber" dense half-increments readonly size="14"></v-rating>
                      <div class="grey--text ml-4">
                        {{item.rating}}
                      </div>
                    </v-row>
                    <v-card-title>{{item.address.state}}</v-card-title>
                    <div class="my-4 subtitle-1">
                      {{item.address.city}}
                    </div>
                    <div>{{item.address.street}}</div>
                  </v-card-text>
                  <v-divider class="mx-4"></v-divider>

                  <v-card-actions>
                    <v-btn color="blue lighten-2" text >
                       <v-icon> mdi-information</v-icon>
                    </v-btn>
                    <v-btn color="blue lighten-2 " text >
                      <v-icon> mdi-map-search</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center">
    <v-pagination
        v-model="page"
        inputmode=""
        :length="restaurantPages.length"
    ></v-pagination>
  </div>
</div>
</template>

<script>
import data from '../data/data_melp.json';

export default {
name: "Restaurants",
  components: {},
  data: () => ({
    data,
    info:[],
    page:1,
    search:null,
    restaurant: [] ,
  }),
  computed:{
    restaurants : {
      get() {
        return this.$store.getters.RESTAURANTS;
      },
      set(value){
        this.$store.commit('SET_RESTAURANTS',value);
      }
    },
    restaurantPages : {
      get() {
        return this.$store.getters.RESTAURANT_PAGES;
      },
      set(value){
        this.$store.commit('SET_RESTAURANT_PAGES',value);
      }
    },
    info : {
      get() {
        return this.$store.getters.INFO;
      },
      set(value){
        this.$store.commit('SET_INFO',value);
      }
    },

  },
  watch:{
    page:{
      handler: function (value) {
        this.restaurant =this.restaurantPages[parseInt(value)-1];
      }
    }
  },
  methods:{
      handlerShowInfo(item){
        console.log(item)
      },
      handlerSetPagination(){
        this.restaurant =this.restaurantPages[parseInt(this.page)-1];
      },
      handlerFilterSetData(){
        this.search= this.search.toLowerCase().trim();
        let  filter = this.restaurantPages.map(element =>{
          element.filter(element => element.name.toLowerCase().indexOf(this.search)>-1)
        })
        console.log(filter);
      },
      setRestaurants(data){
        this.$store.commit('SET_INFO',data);
        let array = [];
        while (data.length >0){
          array.push(data.splice(0,10));
        }
        this.$store.commit('SET_RESTAURANT_PAGES',array);
        this.restaurant= this.restaurantPages[0];
      }

  },
  created() {
    this.setRestaurants(data);

  }
}
</script>

<style scoped>

</style>