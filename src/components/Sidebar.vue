<script type="text/babel">
export default {
	'name': 'Sidebar'
}
</script>

<template>
	<div zf-panel position="left" id="sidebar" class="medium-grid-block collapse medium-3 large-3 vertical">
		<div class="grid-content collapse shrink hide-for-medium">
			<a href="" class="secondary button expand" zf-close>Close</a>
		</div>
		<div class="grid-content collapse shrink">
			<img src="http://placehold.it/400x150&text=Logo">
		</div>
		<div class="grid-content">

			<section class="block-list">
				<header>Rooms</header>
				<ul>
					<li>
						<a href="#">
							Slam Book
							<span class="block-list-label">7</span>
						</a>
					</li>
					<li>
						<a href="#">
							Foundation Chat
							<span class="block-list-label">2</span>
						</a>
					</li>
					<li>
						<a class="success" href="#">
							LolCats
							<span class="block-list-label">2</span>
						</a>
					</li>
				</ul>
			</section>

			<section class="block-list">
				<header>People</header>
				<ul>
					<li>
						<a href="#">
							Glen Coco
							<span class="block-list-label">2</span>
						</a>
					</li>
					<li>
						<a class="success" href="#">
							Guy Guyerson
							<span class="block-list-label">2</span>
						</a>
					</li>
				</ul>
			</section>
		</div>
		<div class="grid-content collapse shrink avatar-section">
			<img src="http://placehold.it/50x50">
			Regina George
		</div>
	</div>
</template>