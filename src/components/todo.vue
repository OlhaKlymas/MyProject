<template>
	<div>
		<div v-for="d in list" v-bind:class="{'strike': d.status}">
			<input type="checkbox">
		{{d.name}}
		</div>
	</div>
</template>

<script>
	export default{
		  data() {
		    return {
		    list: [
		        {
		          name: "Дело №1",
		          status: false
		        },
		        {
		          name: "Дело №2",
		          status: false
		        },
		        {
		          name: "Дело №3",
		          status: false
		        },
		        {
		          name: "Дело №4",
		          status: false
		        }
		    ]
			}
		  },
		  methods: {
		  	// toDo: function(){
		  	// 	let t = body.getElementsByName('input')
		  	// 	if(input:checked){
		  	// 		d.status = true
		  	// 	}
		  	// 	else{
		  	// 		d.status = false
		  	// 	}
		  	// }
		  }
	}
</script>

<style>
	.strike:checked{
	text-decoration: line-through;
	color: #aaa;
	}
</style>