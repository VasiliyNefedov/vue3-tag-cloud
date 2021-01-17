<template>
  <div class="container">
    <label for="tagCloud">tags:</label>
    <input id="tagCloud" type="text" placeholder="press enter for each one" v-model="tagEnter" @keydown.enter="addTag">
    <div>
      <span v-for="(tag, idx) in tagList" :key="tag" @click="removeTag(idx)">#{{ tag }}</span>
    </div>
  </div>
</template>

<script>
import {ref, onUpdated} from 'vue'

export default {
  name: "TagCloud",
  props: {
    tagFromParent: String
  },
  setup(props) {
    const tagFromParent = ref('')
    const tagEnter = ref('')
    const tagList = ref(['tag2', "tag3"])

    const addTag = () => {
      if (tagEnter.value !== '' && !tagList.value.includes(tagEnter.value)) {
        tagList.value.push(tagEnter.value)
      }
      tagEnter.value = ''
    }

    const removeTag = (idx) => {
      tagList.value.splice(idx, 1)
    }

    onUpdated(() => {
      if (props.tagFromParent !== tagFromParent.value) {
        tagFromParent.value = props.tagFromParent
      }
      if (!tagList.value.includes(tagFromParent.value)) {

        tagList.value.push(props.tagFromParent)
        // tagFromParent.value = ''
      }
      console.log('123')
    })




    return {tagList, tagEnter, addTag, removeTag}
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