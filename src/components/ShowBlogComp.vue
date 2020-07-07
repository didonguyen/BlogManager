<template>
  <div class="show-blogs">
      <h1>All Blogs Articles</h1>
      <input type="text" placeholder="search blogs" v-model="search" />
      <div class="blog" v-for="(blog, index) in filteredBlogs" v-bind:key="index">
          <router-link v-bind:to="'/blog/'+ blog.id"><h3 v-rainbow>{{ blog.title | toUppercase }}</h3></router-link>
          <article>
              {{ blog.content | snippet }}
          </article>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'ShowBlogComp',
  props: {
      
  },
  data() {
      return {
          search: '',
          blogs:[]
      }
  },
  computed: {
      filteredBlogs() {
          return this.blogs.filter((blog) =>{
              return blog.title.match(this.search);
          });
      }
  },
  filters: {
      toUppercase(value){
          return value.toUpperCase();
      }
  },
  directives: {
      'rainbow':{
          bind(el, binding, vnode){
              el.style.color = '#' + Math.random().toString().slice(2,8);
          }
      }
  },
  created() {
    this.$http.get('https://vue-blogmanager.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
        var blogsArray = [];
        for ( let key in data ){
            data[key].id = key;
            blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
    })
  }
};
</script>

<style>
.show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
