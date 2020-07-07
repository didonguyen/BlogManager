<template>
  <div>
    <header-comp> </header-comp>
    <router-view> </router-view>


  </div>
</template>

<script>

import AddBlogComp from './components/AddBlogComp';
import ShowBlogComp from './components/ShowBlogComp';
import HeaderComp from './components/HeaderComp';
import SingleBlogComp from './components/SingleBlogComp.vue';

export default {
  name: 'app',
  data () {
    return {
      blogs: []
    }
  },
  components: {
    AddBlogComp,
    ShowBlogComp,
    HeaderComp
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    })
  }
}
</script>

<style>


</style>
