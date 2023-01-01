<template>
  <v-navigation-drawer color="deep-purple accent-4" real app v-model="drawer">
    <v-responsive class="pt-4 text-center">
        <v-avatar size="100px" class="bg-grey lighten-2">
          <img src="/ike.png" alt="avator">
        </v-avatar>
        <p class="text-white mt-2">
            Isaac Mhlanga
        </p>
      </v-responsive>
   

    <v-list nav >
        <v-tile v-for="link in links" :key="link.text">
            <v-list-item :to="link.route">
                <span><v-icon class="mx-2">{{link.icon}}</v-icon></span>
                <span>{{link.text}}</span>
            </v-list-item>
        </v-tile>
      </v-list>
  </v-navigation-drawer>
  <v-app-bar flat="true" class="grey lighten-4" app>
    <v-app-bar-nav-icon color="grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light text-grey">todo</span>
            <span>ike</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y>
        
      
        <template v-slot:activator="{ props }">
          <v-btn
            color="grey"
            v-bind="props"
          >
          <v-icon class="mx-2">mdi-chevron-down</v-icon>
           <span>Menu</span>
          </v-btn>
        </template>
  
        <v-list>
            <v-tile v-for="link in links" :key="link.text">
                <v-list-item :to="link.route">
                    <span><v-icon class="mx-2 text-grey">{{link.icon}}</v-icon></span>
                    <span>{{link.text}}</span>
                </v-list-item>
            </v-tile>
         
        </v-list>
      </v-menu>

        <v-btn color="grey">
          <span>Sing Out</span>
          <v-icon class="grey mx-2">mdi-export</v-icon>
        </v-btn>
  </v-app-bar> 
</template>
<script>
import Popup from './Popup'

export default {
   components: 
   {
    Popup,
   },
   data(){
    return {
        drawer: true,
        links: [
            { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
            { icon: 'mdi-folder', text: 'My projeects', route: '/projects' },
            { icon: 'mdi-account-multiple', text: 'Team', route: '/team' },
        ]
    }
   }

}
</script>





