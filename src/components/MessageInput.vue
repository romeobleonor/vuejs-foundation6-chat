<script type="text/babel">
	import store from '../store';

	export default {
		name: 'MessageInput',
		data() {
			return {
				appState: store.state,
				message: ''
			}
		},
		methods: {
			submitMessage() {
				this.appState.addMessage(this.appState.currentMember, this.message);
				this.message = '';
			}
		}
	}
</script>

<template>
	<div class="message-input grid-content collapse shrink">
		<form v-on:submit.prevent="submitMessage">
			<span class="inline-label">
				<input type="text" placeholder="Message input" v-model="message">
				<button type="submit" class="button">Send</button>
			</span>
		</form>
	</div>
</template>