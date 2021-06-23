<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <Bord/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import axios from "axios";
import Bord from './components/Bord'

export default {
  name: 'App',
   components: {
    Bord
  },
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    }
  },
  created() {
    axios
      .get(
        '/comments'
      )
      .then(res => {
        this.posts = res.data.documents;
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    createComment() {
      axios.post(
        '/comments',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
     this.name =''
     this.comment = ''
    }
  }
}
</script>

<style>

</style>
