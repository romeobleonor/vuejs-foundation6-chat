<script type="text/babel">
	export default {
		name: 'Message',
		props: ['message']
	}
</script>

<template>
	<h4><img src="http://placehold.it/30x30"> {{message.member}}</h4>
	<p>{{message.message}}</p>
	<p>Posted:
		<time datetime="{{ message.timestamp | formatDate }}" v-timeago>
			{{message.timestamp | fromNow }}
		</time>
	</p>
	<hr/>
</template>