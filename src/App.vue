<template>
<!-- App.vue -->

<v-app>
  <Navbar />

  <!-- Sizes your content based upon application components -->
  <v-main class="grey" >

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
 
</template>
<script>
import Navbar from "./components/Navbar.vue"


export default {
  name: 'App',
  components: {
    Navbar,
   
  },
  data: () => ({
      
      group: null,
      
    }),
 
}
</script>
<style>
.grey
{
  background-color: rgb(241, 239, 239) !important;
}

</style>
