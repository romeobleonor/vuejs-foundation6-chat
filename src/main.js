import Vue from 'vue';
import App from './components/App.vue';
import {formatDate, fromNow} from './filters/MomentFilter';
import TimeAgo from './directives/TimeAgo';
import moment from 'moment';
import store from './store';

import { createStore } from 'redux';
import messagesApp from './store/reducers';
import { addMessage } from './store/actions';

let reduxStore = createStore(messagesApp, [{message: 'Hydration period'}]);

// Log the initial state
console.log(reduxStore.getState());

// Every time the state changes, log it
let unsubscribe = reduxStore.subscribe(() =>
	console.log(reduxStore.getState())
);

reduxStore.dispatch(addMessage('first from mainjs'));
reduxStore.dispatch(addMessage('second from mainjs'));

// Stop listening to state updates
unsubscribe();

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

