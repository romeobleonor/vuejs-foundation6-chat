<script type="text/babel">
	import MessageInput from './MessageInput.vue';
	import MessageList from './MessageList.vue';

	export default {
		name: 'MessagePane',
		components: {
			MessageInput,
			MessageList
		}
	}
</script>

<template>
	<message-list></message-list>
	<message-input></message-input>
</template>