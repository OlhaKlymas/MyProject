<template lang="pug">
	div.card
		div.fotoUser
			img(src="http://vmiresobak.com/media/k2/items/cache/4ab4b6df96c060fa741e97b50eafb07c_M.jpg")
		div.contCard
			h3 My title
			p some information
			div.buttonBox
				button.buttonLeft(onclick="window.location.href='#'")
				button.buttonRight(onclick="window.location.href='#'")
</template>
<style lang="sass">
	.card
		width: 500pх
		height: 200px
		display: flex
		flex-direction: row
		background-color: #525563
	.fotoUser
		width: 50%
		img 
			width: 100px
	.buttonBox
		display: flex
		flex-direction: row
		.buttonLeft
			backgraund: red
			width: 30%
			hight: 30%
		.buttonRight
			backgraund: red
			width: 30%
			hight: 30%
</style>