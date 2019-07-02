<template>
<!-- eslint-disable -->
<!-- eslint-disable vue/no-v-html -->
  <v-app>
    <Navbar/>
    <!-- <img src="./assets/logo.png"> -->
    <main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
