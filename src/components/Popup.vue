<template>
    <v-dialog v-model="dialog" flat="true" max-width="600">
      <template v-slot:activator="{ props }">
        
        <v-btn small flat="true" v-bind="props">
          <v-icon class="mx-2" color="grey">mdi-folder</v-icon>
          <span class="text-caption text-lowercase text-grey">Add project</span>
          <v-tooltip activator="parent" location="top">
           <span class="text-caption">Add project</span>
          </v-tooltip>
        </v-btn>
      </template>

      <v-card class="grey">
        <v-card-title class="text-center text-grey">Add a new project</v-card-title>
        <v-card-text>
          <v-form class="px-3 deep-purple accent-4" ref="form">
            <v-text-field label="Title"  color="purple accent-4" class="text-purple" :rules="inputRules" v-model="title" prepend-icon="mdi-folder" Event></v-text-field>
            <v-textarea label="Information" color="purple accent-4" class="text-purple" :rules="inputRules" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            <v-text-field :value="due" color="purple accent-4" class="text-purple" :rules="inputRules" label="Due date" v-model="date" prepend-icon="mdi-calendar"></v-text-field>
            <template>
                <v-row justify="center">
                  <v-date-picker v-model="picker">12/45/78</v-date-picker>
                </v-row>
              </template>

            <v-btn class="mx-10" flat="true" @click="submit" color="success">ADD PROJECT</v-btn>
          </v-form>  
        </v-card-text>
        <v-card-actions>
          <v-btn color="grey"  block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>

export default
{
    data () {
      return {
        dialog: false,
        title: '',
        content: '',
        due: null,
        inputRules: [
            v => v.length >=3 || 'Minimum length is 3 characters'
        ]
      }
    },
    methods: {
        submit()
        {
         if(this.$refs.form.validate())
         {
            const project = {
                title: this.title,
                content: this.content,
                due: this.due,
                person: 'The Net Ninja',
                status: 'ongoing'
            }
         }
           db.collection('projects').add(project).then(()=> {
             console.log('added to db')
           })
        }
    }
}
</script>
<style scoped>
.v-card
{
  border-radius: 10px !important;
}
.Event:active
{
  color: purple !important;
}
</style>