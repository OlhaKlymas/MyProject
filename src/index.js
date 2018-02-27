
// import "./posts.js";
import "./styles/styles.scss";
import Vue from "vue/dist/vue.min.js";
// import ctrl from "./controllers/clickerCtrl.js";
import todo from "./components/todo.vue";
import clicker from "./components/clicker.vue";
import pugTest from "./components/pugTest.vue";
import contentV from "./components/content.vue";
import card from "./components/card.vue";

// new Vue ({
// 		el:"#app-0",
// 		data:{
// 			data:"Hello"
// 		},
// })

// new Vue({
// 	el:"#app-1",
// 	data: {
//     	message: 0
//   	},
//   	methods: {
//     Message: function () {
//       this.message++
      
//     }
//   }
// })

// new Vue({
//   el:"#app-2",
//   data: {
//     list: [
//         {
//           name: "Дело №1",
//           status: true
//         },
//         {
//           name: "Дело №2",
//           status: true
//         },
//         {
//           name: "Дело №3",
//           status: true
//         },
//         {
//           name: "Дело №4",
//           status: true
//         }
//     ]
//   }
// })

new Vue ({
  el:"#app",
  template:'<div> <todo/><clicker/><pugTest/><card/><contentV/></div>',
  components:{
    todo : todo,
    clicker : clicker,
    pugTest : pugTest,
    card : card,
    contentV : contentV
  }
})

