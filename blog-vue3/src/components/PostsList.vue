<template>
  <div>qqqq</div>
  <div v-for="post in posts">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'PostsList',
  props: ['posts']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
