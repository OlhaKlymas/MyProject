
import "./posts.js";
import "./styles/styles.scss";
import Vue from "vue/dist/vue.min.js";
import ctrl from "./controllers/clickerCtrl.js";


new Vue ({
		el:"#app",
		data:{
			data:"Hello"
		},
})

new Vue({
	el:"#app-1",
	data: {
    	message: 0
  	},
  	methods: {
    Message: function () {
      this.message++
      
    }
  }
})

new Vue({
  el:"#app-2",
  data: {
    list: [
    {
      name: "Дело №1",
      status: checked,
    },
    {
      name: "Дело №2",
      status: checked,
    },
    {
      name: "Дело №3",
      status: checked,
    },
    {
      name: "Дело №4",
      status: checked,
    }
    ]
  }
})