<template>
<!-- eslint-disable -->
		<Panel title="Youtube Video">
			<div class="youtube-video">
				<youtube :video-id="youtubeId" :player-height="height" :player-width="width"></youtube>
			</div>
		</Panel>
</template>

<script>
export default {
	data() {
		return {
			width: null,
			height: null
		}
	},
	props: [
		'youtubeId'
	],
	mounted() {
		if (window.screen.width < 740) {
			this.width = window.screen.width - 50
			this.height = 200
		} else {
			this.width = 640
			this.height = 390
		}
	}
}
</script>

<style scoped>
	@media screen and (max-width: 740px) {
		.youtube-video {
			width: 100% !important;
			height:200px !important;
		}
	}
	@media screen and (min-width: 740px) {
		
	}
</style>
