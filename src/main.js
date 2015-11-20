import Vue from 'vue';
import App from './components/App.vue';
import {formatDate, fromNow} from './filters/MomentFilter';
import TimeAgo from './directives/TimeAgo';
import moment from 'moment';
import store from './store';

moment.locale(store.state.locale);

Vue.config.debug = true;

Vue.filter('formatDate', formatDate);
Vue.filter('fromNow', fromNow);

Vue.directive('timeago', TimeAgo);

new Vue({
	el: '#app',
	components: {
		App
	}
});

