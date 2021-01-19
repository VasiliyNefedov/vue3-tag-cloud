<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <button @click="addSomePost">click</button>-->
    <TagCloud :tagFromParent="currentTag" />
    <PostsList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostsList from '@/components/PostsList.vue'
import {ref, computed, watch} from "vue";
import {useStore} from "vuex";
import TagCloud from "@/components/TagCloud";

export default {
  name: 'Home',
  components: {
    TagCloud,
    PostsList
  },
  setup() {
    const store = useStore()
    const currentTag = ref('')
    const tagCloud = ref([])
    const posts = ref([])
    const viewPosts = ref([])
    const error = ref(null)

    const tags = ref(store.state.tagCloud)

    // computed()
    const viewedPosts = computed(() => viewPosts.value = posts.value.filter(post => tags.value.includes(post.tags[0])))

    // watch(currentTag.value, () => {
    //   props.tagFromParent
    // })


    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/')
        if (!data.ok) {
          throw Error('error')
        }
        posts.value = await data.json()
      } catch (err) {
        error.value = err.message
      }
    }

    load()

    const newPost = ref({title: "json-server", author: "typicode", body: "lorem40"})

    const addSomePost = async () => {
      try {
        let response = await fetch('http://localhost:3000/posts/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(newPost.value)
        })
        let result = await response.json();
        alert(result.message);
      } catch (err) {
        console.log(err.message)
      }
    }

    return {posts, error, addSomePost, currentTag, tagCloud, viewedPosts}
  }
}
</script>
