// import model from "../models/info.js";
// // var model = require("../models/info.js");

// import view from "../views/engine.js";
// let controller = {
// 	model,
// 	view,
// 	work: function(){
// 		let resalt =[],
// 		data = this.model.data;
// 		resalt = data.map(function(el){
// 			let html = document.createElement(el.tag);
// 			if(el.body){
// 				html.innerHTML = el.body
// 			};
// 			if (el.src) {html.setAttribute("src",el.src)};
// 			return html;
// 			if (el.src&&el.tag!="ing");
// 		});

// 		this.markUp = resalt;
// 		return resalt;
// 	},
// 	render: function(){
// 	this.work();
// 	this.view.render(this.markUp);
// 	},
// 	markUp: []
// };

// export default controller;

import model from "../models/info.js";
// var model = require("../models/info.js");

import view from "../views/engine.js";
let controller = {
  model,
  view,
work: function(){
  //   let resalt =[];
  //   this.model.init().then(()=>{
  //     data = this.model.data;
  //     return data.map(function(el){
  //       if (el.body) {
  //         el.tag = "div";
  //       }
  //       let div = document.createElement(el.tag);
  //       if(el.body){        
  //         div.innerHTML = "<p>"+el.body+"</p>";
  //       };
  //       if (el.id) {
  //           div.setAttribute("id", el.id);
  //           };

  //       if(el.title){
  //         el.tag = "h1";
  //       };
  //       let h1 = document.createElement(el.tag);
  //       if(el.title){
  //         h1.innerHTML = el.title;
  //       };
  //       if (el.userId) {
  //         h1.classList.add("one")
  //       }
  //       let html = div.appendChild(h1);
  //       return div;
  //       return html;
  //     });
  //   this.markUp = resalt;
  //   });
  // },

  let result =[];
    return this.model.init().then(()=>{
      let data = this.model.data;
      this.markUp = data;
      if("div"){
      let div = document.getElementsByTagName('div');
      let classes = ['success', 'info', 'error', 'warning'];
      let classDiv = Math.floor(Math.random() + classes.length);
      div.classList.add(classes[classDiv]);
    }
    });
  },


  render: function(){
  this.work().then(()=>{
      this.view.render(this.markUp);
  });
  },
  markUp: []
};


export default controller;
