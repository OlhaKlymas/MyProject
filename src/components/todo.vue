<template>
	<div>
		<div v-for="d in list" v-bind:class="{'strike': d.status}">
			<input type="checkbox" name="">
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
		          status: true
		        },
		        {
		          name: "Дело №2",
		          status: true
		        },
		        {
		          name: "Дело №3",
		          status: true
		        },
		        {
		          name: "Дело №4",
		          status: true
		        }
		    ]}
		  },
		  methods: {
		  	
		  }
	}
</script>

<style >
	.toDoList{
		color: red;
	}
</style>