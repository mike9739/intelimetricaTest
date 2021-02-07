<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

      <v-card-title>{{restaurant.name}}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="restaurant.rating" color="amber" dense half-increments readonly size="14"></v-rating>
          <div class="grey--text ml-4">
            {{restaurant.rating}}
          </div>
        </v-row>
        <div class="my-4 subtitle-1">
          {{`${restaurant.address.city}- ${restaurant.address.state}`}}
        </div>

        <div>{{restaurant.address.street}}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="showDialogInfo">
          Contact Info <v-icon> mdi-</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialogInfo" transition="dialog-top-transition" max-width="600">
      <template >
        <v-card>
          <v-toolbar
              color="primary"
              dark
          >{{restaurant.name}}</v-toolbar>
          <v-card-text>
            <div class="text-h4 pa-12">Hello world!</div>
            <div class="text-h4 pa-12">Hello world!</div>
            <div class="text-h4 pa-12">Hello world!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
                text
                @click="closeModalInfo"
            >Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>

</template>

<script>
export default {
  props:{restaurant:null},
  name: "RestaurantCard",
  data:()=>({
    dialogInfo:false,
  }),
  methods:{
    showDialogInfo(){
      this.dialogInfo = true;
    },
    closeModalInfo(){
      this.dialogInfo=false;
    },
  },

}
</script>

<style scoped>

</style>