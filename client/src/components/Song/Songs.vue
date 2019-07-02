<template>
    <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <search-panel/>
          <song-panel class="mt-2"/>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongPanel from './SongsList'
import SearchPanel from './SearchPanel'

export default {
  components: {
    SongPanel,
    SearchPanel
  }
}
</script>

<style scoped>
  
</style>
