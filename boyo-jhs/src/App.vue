<template>
  <div id="app">
    <h3>送信フォーム</h3>
    <label for="name">名前：</label>
    <input 
      v-model="name" 
      id="name" 
      type="text"
    >
    <br><br>
    <label for="comment">コメント：</label>
    <textarea  
      v-model="comment" 
      id="comment"
    ></textarea>
    <br><br>
    <button @click="createComment">送信</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>{{post.fields.comment.stringValue}}</div>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
