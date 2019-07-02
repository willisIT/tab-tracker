<template>
  <div>
    <v-toolbar fixed dark color="teal">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="logo">
        <span @click="navigateTo({name: 'songs'})">WillisBeat</span>
      </v-toolbar-title>
      <v-toolbar-items>
          <v-btn flat @click="navigateTo({name: 'songs'})">Browse</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">Sign up</v-btn>
        <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">Login</v-btn>
        <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">Log Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              WillisStudioz
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="navigateTo({name: item.link})"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <span v-if="!$store.state.isUserLoggedIn">
          <v-list-tile
            v-for="item in auth"
            :key="item.title"
            @click="navigateTo({name: item.link})"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </span>
        <v-list-tile
          v-if="$store.state.isUserLoggedIn"
          @click="logout"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard', link: 'songs' },
        { title: 'Songs', icon: 'headset', link: 'songs' }
      ],
      auth: [
        { title: 'Login', icon: 'question_answer', link: 'login' },
        { title: 'Signups', icon: 'question_answer', link: 'register' }
      ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');
.v-toolbar__title.logo, .v-list__tile__title.title{
  font-family: 'Arvo', serif !important;
}
.v-toolbar__title.logo:hover{
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
