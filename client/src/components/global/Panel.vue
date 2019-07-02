<template>
    <div class="white elevation-2">
        <v-toolbar dark color="teal">
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action"/>
        </v-toolbar>

        <div class="py-4 px-2">
          <slot>
              No slot content defined.
          </slot>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>
