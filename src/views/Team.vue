<template>
    <div class="team">
      <v-container class="my-5">
        <v-layout class="mb-5 row">       
          <v-btn small flat="true">
             <v-icon class="mx-2" color="grey">mdi-folder</v-icon>
             <span class="text-caption text-lowercase text-grey">Add Team Member</span>
             <v-tooltip activator="parent" location="top">
              <span class="text-caption">Add Team Member</span>
             </v-tooltip>
           </v-btn>
        
            <v-btn small flat="true" class="mx-2">
              <v-icon class="mx-2" color="grey">mdi-account</v-icon>
             <span class="text-caption text-lowercase text-grey">Delete Team member</span>
             <v-tooltip activator="parent" location="top">
                 <span class="text-caption">Delete Team Member</span> 
             </v-tooltip>
             </v-btn>  
       </v-layout>
       <v-layout class="row">
          <v-row dense>
            <v-col xs="12" sm="4" md="3" lg="2" v-for="person in team" :key="person.name">
              <v-card>
                <v-responsive class="pt-4 text-center">
                  <v-avatar size="100px" class="bg-grey lighten-2">
                    <img :src="person.avatar" alt="avator">
                  </v-avatar>
                </v-responsive>
                <v-card-title class="text-h7 text">
                 {{ person.name }}
                </v-card-title>
                <v-card-subtitle>{{ person.role}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn text>
                    <v-icon class="mx-2" color="grey">mdi-message-text</v-icon>
                    <span class="text-caption text-grey" >Message</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-devider></v-devider>
              </v-col>
              </v-row>
          </v-layout>
      </v-container>
    </div>
  </template>
<script>
 export default 
 {
  data() {
    return {
      team: [
        {name: 'Isaac Mhlanga', role: 'Software developer', avatar: '/ike.png'},
        {name: 'Tinyiko Chauke', role: 'Web developer', avatar: '/ike.png'},
        {name: 'Precious Mabunda', role: 'Teacher', avatar: '/ike.png'},
        {name: 'Fatima Ntsako', role: 'Data Scientist', avatar: '/ike.png'},
        {name: 'Precious Mabunda', role: 'Teacher', avatar: '/ike.png'},
        {name: 'Fatima Ntsako', role: 'Data Scientist', avatar: '/ike.png'},
        {name: 'Fatima Ntsako', role: 'Data Scientist', avatar: '/ike.png'},
        {name: 'Precious Mabunda', role: 'Teacher', avatar: '/ike.png'}
      ]
    }
  }
 }
</script>
<style scoped>
 .v-card-title
 {
  text-align: center;
 }
 .v-card-subtitle
 {
  text-align: center;
 }
</style>
