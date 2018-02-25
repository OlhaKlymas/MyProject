<template>
	<div class="posts" v-for="post in posts">
		<span>{{post.id}}</span>
		<h3>{{post.title}}</h3>
		<p>{{post.body}}</p>
	</div>
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
			getAllPosts: function(){
				this.$http.get(this.endpoint).then(function(response){
					this.posts = response.data
				}, function(error){
				})
			}
		},
		created: function(){
			this.getAllPosts()
		}
	}
</script>
<style></style>



new Vue({
	el:"#appa",
	data:{
		endpoint:"https://jsonplaceholder.typicode.com/posts",
		posts: []
	},
	methods:{
		getAllPosts: function(){
			this.$http.get(this.endpoint).then(function(response){
				this.posts = response.data
			},
			function(error)
			)
		}
	}
})