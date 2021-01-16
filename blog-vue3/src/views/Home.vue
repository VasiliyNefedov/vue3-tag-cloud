<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostsList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostsList from '@/components/PostsList.vue'
import {ref} from "vue";

export default {
  name: 'Home',
  components: {
    PostsList
  },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('error')
        }
        posts.value = await data.json()
        console.log(data)
      } catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return {posts, error}
  }
}
</script>
