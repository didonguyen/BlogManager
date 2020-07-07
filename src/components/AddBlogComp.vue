<template>
  <div class="add-blog">
      <h2>Add A New Blog Post</h2>
      <h3 v-if="submited">Added Success</h3>
      <form action="" v-if="!submited">
          <label>Blog Title:</label>
          <input type="text" v-model="blog.title" required />
          <label>Blog Content:</label>
          <textarea v-model="blog.content"></textarea>
          <div id="checkboxes">
              <label>Ninjas</label>
              <input type="checkbox" value="ninjas" v-model="blog.categories">
              <label>Wizards</label>
              <input type="checkbox" value="wizards" v-model="blog.categories">
              <label>Mario</label>
              <input type="checkbox" value="mario" v-model="blog.categories">
              <label>Cheese</label>
              <input type="checkbox" value="cheese" v-model="blog.categories">
          </div>
          <label>Author:</label>
          <select v-model="blog.author">
              <option v-for="(author, index) in authors" v-bind:key="index">{{ author }}</option>
          </select>
          <button v-on:click.prevent="post">Add Blog</button>
      </form>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog Title: {{ blog.title }}</p>
          <p>Blog Content: {{ blog.content }}</p>
          <p>Blog Categories:</p>
          <ul>
              <li v-for="(category,index) in blog.categories" v-bind:key="index">{{ category }}</li>
          </ul>
          <p>Author: {{ blog.author }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddBlogComp',
  data() {
      return {
          blog: {
              title: '',
              content: '',
              categories: [],
              author: ''
          },
          authors: ['The Net Ninjas', 'The Angular', 'The Vue'],
          submited: false
      }

  },
  methods: {
      post(){
          this.$http.post('https://vue-blogmanager.firebaseio.com/posts.json',this.blog).then(function(data){
              this.submited = true; 
          })

      }
  }
};
</script>

<style>
/* #add-blog *{
    box-sizing: border-box;
} */
.add-blog{
    margin: 20px auto;
    width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 15px;
}
#checkboxes label{
    display: inline-block;
}
</style>
