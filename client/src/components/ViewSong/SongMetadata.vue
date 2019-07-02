<template>
<!-- eslint-disable -->
		<Panel title="Song metadata">
					<v-card>
						<img class="card-img" :src="song.albumImageUrl">
						<v-card-title primary-title>
							<div style="text-align: left; font-size: 1.1rem;">
								{{song.title}}
								<div><b>Artist: </b> {{song.artist}}</div>
								<div><b>Genre: </b> {{song.genre}}</div>
								<div><b>Album: </b> {{song.album}}</div>
							</div>
						</v-card-title>
						<v-card-actions>
							<v-btn
								dark
								color="teal"
								@click="navigateTo({name: 'song-edit', params: {songId: song.id}})"
								>
								Edit Song
							</v-btn>
						</v-card-actions>
					</v-card>
			</Panel>
</template>

<script>
export default {
	props: [
		'song'
	],
	methods: {
		navigateTo (route) {
			this.$router.push(route)
		}
	},
}
</script>

<style scoped>
	@media screen and (max-width: 740px) {
		.card-img{
			width: 100%;
			height: 250px !important;
		}
	}
	@media screen and (min-width: 740px) {
		.card-img{
			width: 100%;
			height: 350px !important;
		}
	}
</style>
