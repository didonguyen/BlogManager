<template>
<div>
    <nav>
      <ul>
          <li>
              <router-link to="/" exact>Blog</router-link>
              <router-link to="/add" exact>Add A New Blog</router-link>
          </li>
      </ul>
  </nav>
</div>
  
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {

      }
  }
};
</script>

<style>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background: #eee;
  color: #444;
}
</style>
