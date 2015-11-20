import Vue from 'vue';
import App from './components/App.vue';
import {formatDate, fromNow} from './filters/MomentFilter';

Vue.config.debug = true;

Vue.filter('formatDate', formatDate);
Vue.filter('fromNow', fromNow);

new Vue({
	el: '#app',
	components: {
		App
	}
});

