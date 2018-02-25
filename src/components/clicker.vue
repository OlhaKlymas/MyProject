<template>
	<div id="app-1">
		  <input v-model="message">
		  <button v-on:click="Message">Press</button>
		</div>
</template>

<script>
	export default{
		data(){
			return {
				message: 0,
				isActive: false
			}
  		},
  		methods: {
			Message: function () {
				if(!this.isActive){
					this.isActive = true;
					setTimeout(() =>{
						alert(this.message);				
						this.isActive = false;
						this.message = 0;
					}, 3000);
				};
			this.message++
			}
		}
	}
</script>
<style></style>