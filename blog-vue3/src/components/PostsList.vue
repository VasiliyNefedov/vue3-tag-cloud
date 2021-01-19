<template>
  <div v-for="post in posts" class="container">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag" @click="addTagToCloud(tag)"> #{{tag}}</span>
    <div class="signature">
      <span>{{post.author}}</span> |
      <span>{{post.date}}</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'PostsList',
  props: ['posts'],
  setup() {
    const store = useStore()

    const addTagToCloud = (tag) => {
      if (!store.state.tagCloud.includes(tag)) {
        store.commit('addTag', tag)
      }
    }

    return {addTagToCloud}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  text-align: left;
  padding: 0 10px;
  margin: 10px auto;
  max-width: 800px;
  background-color: whitesmoke;
  border: #d9d9d9 solid 2px;
  border-radius: 20px;
}
.container p {
  text-indent: 20px;
}
.signature {
  text-align: right;
}
.tag {
  cursor: pointer;
  color: #243445;
}
.tag:hover {
  color: #5c7085;
}

h3 {
  margin: 15px;
}

</style>
