<template>
	<Panel title="Songs">
		<v-btn
			slot="action"
			class="teal lighten-2"
			dark
			fab
			absolute
			right
			middle
			@click="navigateTo({name: 'song-create'})"
		>
			<v-icon>add</v-icon>
		</v-btn>
		<div>
			<v-layout row wrap>
				<v-flex xs12 md6
					v-for="song in songs" :key="song.id"
				>
					<v-card class="margin">
						<img class="card-img" :src="song.albumImageUrl">
						<v-card-title primary-title>
							<div style="text-align: left">
								{{song.title}}
								<div><b>Artist: </b> {{song.artist}}</div>
								<div><b>Genre: </b> {{song.genre}}</div>
								<div><b>Album: </b> {{song.album}}</div>
							</div>
						</v-card-title>
						<v-card-actions>
							<v-btn
								flat
								color="orange"
								@click="navigateTo({name: 'song', params: {songId: song.id}})"
								>
								Read more
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</div>
	</Panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
	},
	watch: {
		'$route.query.search': {
			immediate: true,
			async handler (value) {
				const songs = await SongsService.index(value)
      	this.songs = songs.data
			}
		}
	},
}
</script>

<style scoped>
  .card-img{
    width: 100%;
    height: 176px;
  }
  @media screen and (max-width: 740px) {
    .v-card.margin {
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 740px) {
    .v-card.margin:nth-child(odd) {
      margin-right: 5px;
      margin-bottom: 5px;
    }
    .v-card.margin:nth-child(even) {
      margin-left: 5px;
      margin-bottom: 5px;
    }
  }
</style>
