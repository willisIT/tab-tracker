<template>
  <v-layout row wrap>
    <v-flex xs12 md6 offset-md3>
      <Panel title="Login">
          <v-form autocomplete>
            <v-alert
              :value="alert"
              type="error"
            >
              {{error}}
            </v-alert>
            <v-text-field
                label="email"
                v-model="email"
                autocomplete
                required
              ></v-text-field>
              <v-text-field
                label="password"
                v-model="password"
                type="password"
                required
              ></v-text-field>
            <v-btn color="teal" class="white--text" @click="login">Login</v-btn>
          </v-form>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      valid: true,
      alert: false,
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      if (!this.email && !this.password) {
        this.alert = true
        this.error = 'email and password must be provided'
      } else {
        await AuthService.login({
          email: this.email,
          password: this.password
        })
          .then(res => {
            this.error = null
            this.alert = false
            this.$store.dispatch('setToken', res.data.token)
            this.$store.dispatch('setUser', res.data.user)
          })
          .catch(err => {
            this.alert = true
            this.error = err.response.data.error
          })
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .erro{
    color: red;
  }
</style>
