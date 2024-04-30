<script setup lang="ts">
import { PropType } from 'vue'
import type { PostType } from '../../shared'

const props = defineProps({
  value: {
    type: Object as PropType<PostType>,
    required: true
  }
})
</script>

<template>
  <v-card
    :title="props.value.title"
    :subtitle="props.value.userId"
    :text="props.value.body"
    variant="tonal"
  >
    <v-divider />
    <v-card-actions>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
