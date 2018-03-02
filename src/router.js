import Vue from "vue";
import VueRouter from "vue-router";


import todo from "./components/todo";
import clicker from "./components/clicker";
import pugTest from "./components/pugTest";
import contentV from "./components/contentv";
import profile from "./components/profile";
import draw from "./components/draw";


Vue.use(VueRouter);

export let routes = [
	{
		path: "/",
		component: profile
	},
		{
		path: "/todo",
		component: todo
	},
	{
		path: "/clicker",
		component: clicker
	},
	{
		path: "/pugTest",
		component: pugTest
	},
	{
		path: "/contentv",
		component: contentV
	},
	{
		path: "/profile",
		component: profile
	},
	{
		path: "/draw",
		component: draw
	}
];

export default new VueRouter({
	mode: "history",
	routes
});