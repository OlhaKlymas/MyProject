<template lang="pug">
	div
		p lol
		div.posts(v-for="post in posts")
			span {{post.id}}
			h3 {{post.title}}
			p {{post.body}}
</template>
<script>
	export default{
		data() {
		    return {
		    	endpoint: 'https://jsonplaceholder.typicode.com/posts',
		    	posts: []
		    }
		},
		methods:{
			init: function(url = 'https://jsonplaceholder.typicode.com/posts'){
			  return fetch(url)
			  .then(response => response.json())
			  .then(json => this.posts = json)
			}
		},
		created: function(){
			this.init();
			console.log("lol")
		}
	}
</script>

