<script type="text/babel">
	import MessageInput from './MessageInput.vue';
	import MessageList from './MessageList.vue';

	export default {
		name: 'MessagePane',
		components: {
			MessageInput,
			MessageList
		},
		data() {
			return {
				messages: [
					{
						member: 'in data function',
						message: 'data function message'
					}
				]
			}
		},
		props: ['member'],
		events: {
			'add-message': (member, message) => {
				this.messages.push({
					member: member,
					message: message
				});
			}
		},
		ready() {
			this.$log('messages');
		}
	}
</script>

<template>
	<message-list :member="member" :messages="messages"></message-list>
	<message-input :member="member"></message-input>
</template>