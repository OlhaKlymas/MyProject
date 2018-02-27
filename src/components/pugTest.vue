<template lang="pug">
	div.container
		div {{msg}}
			input(id="input" type="file")
			button(id="button" @click="readFile") Read
			pre {{file.message}}
		img
		canvas
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				msg:"ReadThis",
				file: {message:""}
			}
		},
		mounted() {
			let input = document.getElementById("input");
			let output = this.file;
			input.onchange = function(){
				let list = this.files;
				console.log(list);
				let file = list[0];
				console.log(file);
				let reader = new FileReader();
				reader.onloadend = function(event){
					let text = event.target.result;
					console.log(text);
					output.message = text;
					}
				reader.readAsText(file);
			}
			
		},
		methods: {
			readFile: function(){
				let button = document.getElementById("button");
			}
		}
		
	}
</script>