import Vue from 'vue';
import Vuex from 'vuex';

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

export default new Vuex.Store({
    state,
    mutations
});