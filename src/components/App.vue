<template>
	<div class="grid-frame">
		<sidebar></sidebar>
		<content></content>
	</div>
</template>

<script type="text/babel">
	import Sidebar from './Sidebar.vue';
	import Content from './Content.vue';

	export default {
		name: 'App',
		components: {
			Sidebar,
			Content
		},
		data() {
			return {
				member: 'Chris Pappas'
			}
		}

	}
</script>