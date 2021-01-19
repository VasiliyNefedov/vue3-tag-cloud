<template>
  <div class="container">
    <label for="tagCloud">tags:</label>
    <input id="tagCloud" type="text" placeholder="press enter for each one" v-model="tagEnter" @keydown.enter="addTag">
    <div>
      <span v-for="(tag, idx) in tagListStore" :key="tag" @click="removeTag(idx)">#{{ tag }}</span>
    </div>
  </div>
</template>

<script>
import {ref, onUpdated, computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: "TagCloud",
  props: {
    tagFromParent: String
  },
  setup(props) {
    const store = useStore()
    const tagEnter = ref('')

    const tagListStore = computed(()=> store.state.tagCloud)


    const addTag = () => {
      if (tagEnter.value !== '' && !store.state.tagCloud.includes(tagEnter.value)) {
        store.commit('addTag', tagEnter.value)
      }
      tagEnter.value = ''
    }


    const removeTag = (idx) => store.commit('removeTag', idx)



    return {tagEnter, addTag, removeTag, tagListStore}
  }
}
</script>

<style scoped>
.container {
  padding: 10px 10px;
  margin: 10px auto;
  max-width: 300px;
  background-color: whitesmoke;
  border: #d9d9d9 solid 2px;
  border-radius: 20px;
}

input {
  background: none;
  border: none;
  border-bottom: 1px solid #5c7085;
  margin-bottom: 10px;
  outline: none;
}

input:hover {
  border-color: #243445;
  transition: ease-in-out 0.3s;
}

span {
  margin: 0 5px;
  font-weight: bold;
  padding: 5px 5px;
  border-radius: 30px;
  background-color: #aac3de;
  cursor: pointer;
}

span:hover {
  background-color: lightcoral;
  color: white;
  transition: ease-in-out 0.3s;
}

</style>