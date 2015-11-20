<script type="text/babel">
	export default {
		name: 'MessageInput',
		props: ['member'],
		data() {
			return {
				message: ''
			}
		},
		methods: {
			submitMessage() {
				console.log('submit message', this.member, this.message);
				this.$dispatch('add-message', this.member, this.message)
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