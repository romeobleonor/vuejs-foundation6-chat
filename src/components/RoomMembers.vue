<script type="text/babel">
	import store from '../store';

	export default {
		name: 'RoomMembers',
		data() {
			return {
				appState: store.state
			}
		}
	}
</script>

<template>
	<section class="block-list">
		<header>In This Room</header>
		<ul>
			<li v-for="member in appState.members">
				<a href="#">{{member}}</a>
			</li>
		</ul>
	</section>
</template>