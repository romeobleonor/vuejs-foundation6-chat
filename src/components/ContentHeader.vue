<script type="text/babel">
	import store from '../store';
	export default {
		name: 'ContentHeader',
		data() {
			return {
				appState: store.state
			}
		},
		computed: {
			currentLocale: function() {
				return this.appState.availableLocales[this.appState.locale];
			}
		},
		methods: {
			switchLocale: function() {
				if (this.appState.locale === 'fr-CA') {
					this.appState.setLocale('en-CA');
				} else {
					this.appState.setLocale('fr-CA');
				}
				window.console.log(this.appState.locale);
			}
		}
	}
</script>

<template>
	<div id="header" class="shrink collapse grid-content">
		<ul class="menu-bar primary">
			<li class="hide-for-medium"><a zf-open="sidebar" href="#">Menu</a></li>
			<li><a href="#">Header 1</a></li>
			<li><a href="#" v-on:click="switchLocale">{{currentLocale}}</a></li>
		</ul>
	</div>
</template>