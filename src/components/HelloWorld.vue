<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-btn v-on:click="login">
          Login
        </v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {checkingAuth} from "@/helpers/backend_helper"

export default {
  name: 'HelloWorld',

  data: () => ({
  }),
  methods: {
    login(){
      checkingAuth();
    }
  }
}
</script>
