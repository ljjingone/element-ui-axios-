import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
    count:1,
    haha:"hello world"
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count-=1;
    },
    became(state){
        state.haha="你好 世界！！！"
    }
}
const actions={
    saveForm (context) {
        return axios.get('http://127.0.0.1:3001/posts')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});