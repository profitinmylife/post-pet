<script setup lang="ts">
import { usePostStore } from '../../entities'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const store = usePostStore()

const handleDelete = () => {
  store.deletePost(props.id)
}
</script>

<template>
  <v-btn @click="handleDelete">Delete</v-btn>
</template>
