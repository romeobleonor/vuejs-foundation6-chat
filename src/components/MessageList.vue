<script type="text/babel">
	import Message from './Message.vue';
	export default {
		name: 'MessageList',
		props: ['messages'],
		components: {
			Message
		},
		ready() {
			console.log(this.messages);
		}
	}
</script>

<template>
	<div class="message-list grid-content">

		<template v-for="message in messages">
			<message :message="message"></message>
		</template>

	</div>

</template>