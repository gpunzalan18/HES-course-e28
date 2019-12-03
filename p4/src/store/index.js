import Vue from 'vue'
import Vuex from 'vuex'
import { blogModule } from './modules/blogModule';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        blogModule: blogModule,
    }
})