<template>
    
      <v-container class="my-5">
       <v-layout class="mb-5 row">       
          <v-btn small flat="true" @click="sortBy('title')">
             <v-icon class="mx-2" color="grey">mdi-folder</v-icon>
             <span class="text-caption text-lowercase text-grey">By project name</span>
             <v-tooltip activator="parent" location="top">
              <span class="text-caption">Sort projects by project name</span>
             </v-tooltip>
           </v-btn>
        
            <v-btn small flat="true" class="mx-2" @click="sortBy('person')">
              <v-icon class="mx-2" color="grey">mdi-account</v-icon>
             <span class="text-caption text-lowercase text-grey">by person</span>
             <v-tooltip activator="parent" location="top">
                 <span class="text-caption">Sort projects by project name</span> 
             </v-tooltip>
             </v-btn>  
       </v-layout>
       <v-card class="pa-0" v-for="project in projects" :key="project.title">
        <v-layout class="row wrap" :class="`project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="text-caption" color="text-grey">
              Project tittle
            </div>
            <div>{{ project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="text-caption" color="text-grey">
             Person
            </div>
            <div>{{ project.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="text-caption" color="text-grey">
             Due by
            </div>
            <div>{{ project.due}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="float-right">
              <v-chip small :class="`${project.status} text-white long my-2 text-caption`">{{ project.status}}</v-chip>
            </div>
          </v-col>
        </v-layout>
        <v-divider></v-divider>
       </v-card>
      </v-container>
   
  </template>
  <script>
  export default {
    data()
    {
      return{
        projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
       
      ]
      }
    },
    methods:
    {
      sortBy(prop)
      {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
  }
  </script>
  <style scoped>

  .project.complete
  {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing
  {
    border-left: 4px solid orange;
  }
  .project.overdue
  {
    border-left: 4px solid tomato;
  }
  .v-chip.complete{
    background: #3cd1c2;
  }
  .v-chip.ongoing{
    background: #ffaa2c;
  }
  .v-chip.overdue{
    background: #f83e70;
  }
 
</style>