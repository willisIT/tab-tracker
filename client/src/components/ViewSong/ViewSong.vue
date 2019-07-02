<template>
<!-- eslint-disable vue/no-v-html -->
  <div>
    <v-layout row wrap>
			<v-flex xs12 md6>
				<songmetadata :song="song" class="margin"/>
			</v-flex>

			<v-flex xs12 md6>
				<youtubevideo :youtubeId="song.youtubeId"/>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12 md6>
				<Tab :tab="song.tab"/>
			</v-flex>
			<v-flex xs12 md6>
				<Lyrics :lyrics="song.lyrics"/>
			</v-flex>
		</v-layout>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import SongsService from '@/services/SongsService'
import songmetadata from '@/components/ViewSong/SongMetadata'
import youtubevideo from './YoutubeView'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
	data() {
		return {
			song: {}
		}
	},
  async mounted () {
		const songId = this.$store.state.route.params.songId
		try {
      const songs = await SongsService.show(songId)
			this.song = songs.data
    } catch (error) {
      console.log(error)
    }
	},
	components: {
		songmetadata,
		youtubevideo,
		Lyrics,
		Tab
	}
}
</script>

<style scoped>
	textarea {
		width: 100%;
		overflow: auto;
		border: none;
		border-style: none;
		border-color: transparent;
		height: 513px;
		text-align: center;
	}
	@media screen and (max-width: 740px) {
		.white.margin {
			margin-bottom: 5px;
		}
		.card-img{
			width: 100%;
			height: 250px !important;
		}
	}
	@media screen and (min-width: 740px) {
		.white.margin {
			margin-right: 5px;
		}
		.card-img{
			width: 100%;
			height: 350px !important;
		}
	}
</style>
