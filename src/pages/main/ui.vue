<script setup lang="ts">
import { CreatePost, PostsList } from '../../widgets'
import { useMain } from './lib'

const {
  posts
} = useMain()
</script>

<template>
  <v-container>
    <v-row justify="center" class="mb-3">
      <create-post class="v-col-6" />
    </v-row>
    <posts-list :value="posts" />
  </v-container>
</template>
