<template>
  <div class="">
    <v-container class="my-5">
      <v-layout class="mb-5 row">       
         <Popup/>
     </v-layout>
      

      <v-expansion-panels class="pb-4" value="showCard">
        <v-expansion-panel
        v-for="project in myprojects"
          :key="project.title"
          :title="project.title"
          :text="project.content "
        >
       
        <v-card class=" bellow" vlaue="showCard">
          <v-card-text class="px-4 text-grey">
           <p class="caption-text">Due by<span>{{project.due}}</span></p> 

          </v-card-text>
        </v-card>
       
      </v-expansion-panel>
      </v-expansion-panels>
      <v-devider></v-devider>
      







    </v-container>
   
  </div>
</template>
<script>
import Popup from '../components/Popup'
export default {
  components: 
   {
    Popup
   },
  data()
    {
      return{
        projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design a new website agin ', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design a new website one more', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
      }
    },
    
    computed: {
      myprojects()
      {
        return this.projects.filter(project =>{
           return project.person === 'The Net Ninja'
        })
      }
    }, 

    methods:
    {
      showCard()
      {
        showValue = true
      }
    }
}
</script>
<style scoped>
.bellow
{
  border-bottom: none;
  border: 1px solid white;
}
.v-expansion-panel
{
  border-left: 4px solid #3cd1c2;
}

</style>
