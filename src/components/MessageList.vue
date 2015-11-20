<script type="text/babel">
	import Message from './Message.vue';
	import store from '../store';

	export default {
		name: 'MessageList',
		components: {
			Message
		},
		data() {
			return {
				appState: store.state
			}
		}
	}
</script>

<template>
	<div class="message-list grid-content">

		<template v-for="message in appState.messages">
			<message :message="message"></message>
		</template>

	</div>

</template>