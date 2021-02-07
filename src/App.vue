<template>
  <v-app>
    <v-app-bar hide-on-scroll app color="pink darken-2" dark>
      <div class="d-flex align-center">
          <v-img alt="MELP Logo" class="shrink mr-2" contain src="./assets/MELP-NO.svg" transition="scale-transition" height="175" width="200"/>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
