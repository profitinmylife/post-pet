<script setup lang="ts">
import { ref } from 'vue'
import { PostType } from '../../shared'
import { usePostStore } from '../../entities'

const innerValue = ref<PostType>({} as PostType);
const store = usePostStore()

const handleSubmit = async () => {
  await store.createPost(innerValue.value)
}

const handleReset = () => {
  innerValue.value = {} as PostType
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="innerValue.userId"
        label="UserId"
      />

      <v-text-field
        v-model="innerValue.title"
        label="Title"
      />

      <v-textarea
        v-model="innerValue.body"
        label="Text"
      />

      <v-btn class="me-4" type="submit">
        Submit
      </v-btn>

      <v-btn @click="handleReset">
        Clear
      </v-btn>
    </form>
</template>
