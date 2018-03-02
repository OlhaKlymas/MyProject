<template>
	<div>
		<div v-for="d in list" v-bind:class="{'strike': d.status}">
			<input type="checkbox" class="n">
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
		  	completeItem: function (){
		  		let myList = document.getElementsByClassName("n");
		  		console.log(myList.length);
		  		for (var i = 0; myList.length > i; i++) {
		  			if(!myList[i].checked){
						this.status = true;
		  			}
		  			else{
						this.status = false;
		  			}
		  		}
		  	}
		  },
		  created: function(){
			this.completeItem()
		}
	}
</script>

<style>
	.strike{
	text-decoration: line-through;
	color: #aaa;
	}
</style>