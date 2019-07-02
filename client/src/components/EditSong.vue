<template>
    <v-layout row wrap>
      <v-flex xs12 md4>
        <Panel title="Edit Song">
          <v-text-field
            label="Title"
            v-model="song.title"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Artist"
            v-model="song.artist"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Genre"
            v-model="song.genre"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Album"
            v-model="song.album"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Album Image Url"
            v-model="song.albumImageUrl"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Youtube ID"
            v-model="song.youtubeId"
            required
            :rules="[required]"
          ></v-text-field>
        </Panel>
      </v-flex>

      <v-flex xs12 md8>
        <Panel title="Song Structure" class="mx-2 song-margin">
          <v-textarea
            label="Tab"
            v-model="song.tab"
            required
            :rules="[required]"
          ></v-textarea>
          <v-textarea
            label="Lyrics"
            v-model="song.lyrics"
            required
            :rules="[required]"
          ></v-textarea>
          <div class="error-msg" v-if="error">
            {{error}}
          </div>
          <v-btn color="teal" class="white--text" @click="save">Save Song</v-btn>
        </Panel>
      </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'required'
    }
  },
  methods: {
    async save () {
      const isAllFilled = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!isAllFilled) {
        this.error = 'Please fill all required fields'
        return
      }
      const songId = this.$store.state.route.params.songId
      await SongsService.put(this.song)
        .then(result => {
          this.error = null
          this.$router.push({
            name: 'song',
            params: {
              songId: songId
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
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
}
</script>

<style>
  .error-msg{
    color: red;
  }
  @media screen and (max-width: 740px) {
    .layout .flex .song-margin{
      margin: 5px 0px 0px !important;
    }
  }
</style>
