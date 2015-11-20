<script type="text/babel">
	import ContentHeader from './ContentHeader.vue';
	import RoomMembers from './RoomMembers.vue';
	import MessagePane from './MessagePane.vue';

	export default {
		name: 'Content',
		components: {
			ContentHeader,
			RoomMembers,
			MessagePane
		}
	}
</script>

<template>
	<div class="grid-block collapse medium-9 large-9 vertical">
		<content-header></content-header>
		<div class="grid-block">
			<div class="grid-block small-12 medium-9 vertical">
				<message-pane></message-pane>
			</div>
			<div class="grid-content medium-3 show-for-medium message-side-bar">
				<room-members></room-members>
			</div>
		</div>
	</div>

</template>