<template>
  	<div id="app">
  		<Home></Home>
		<p>
			You may also want to checkout
			<a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
			<a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
		</p>
  	</div>
</template>

<script>
import Home from './components/Home'

export default {
	components: {
		Home
	}
}
</script>

<style lang='sass'>
html {
  	height: 100%;
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
}

#app {
	color: #000;
	margin-top: -100px;
	max-width: 600px;
	font-family: Source Sans Pro, Helvetica, sans-serif;
	text-align: center;
}

#app a {
	color: #42b983;
	text-decoration: none;
}

.logo {
	width: 100px;
	height: 100px
}
</style>
