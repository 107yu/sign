import Vue from "vue";
import Vuex from "vuex"
import CreateLogger from "vuex/dist/logger"

//引入store子模块
import map from "./modules/map"
import addInterview from "./modules/addInterview"
import interviewList from "./modules/interviewList"


Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        map,
        addInterview,
        interviewList,
    },
    plugins : [CreateLogger()]
})