<script setup lang="ts">
import { usePostsStore } from '../../entities'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const store = usePostsStore()

const handleDelete = () => {
  store.deletePost(props.id)
}
</script>

<template>
  <v-btn @click="handleDelete">Delete</v-btn>
</template>
