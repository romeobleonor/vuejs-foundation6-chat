import Vue from 'vue'
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';

Vue.config.debug = true;

console.log('hello vue');

new Vue({
	el: '#app',
	components: {
		Sidebar,
		Content
	},
	data() {
		return {
			member: 'Chris Pappas'
		}
	}
});

