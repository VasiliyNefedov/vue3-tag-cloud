import {createStore} from 'vuex'

export default createStore({
    state: {
        tagCloud: ['tag1']
    },
    mutations: {
        addTag(state, tag) {
            state.tagCloud.push(tag)
        },
        removeTag(state, idx) {
            state.tagCloud.splice(idx, 1)
        }
    }
})


