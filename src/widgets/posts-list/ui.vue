<script setup lang="ts">
import {PropType, ref} from 'vue'
import type { PostType } from '../../shared'
import { Post } from '../../entities'
import { EditPost, DeletePost } from '../../features';

const props = defineProps({
  value: {
    type: Array as PropType<PostType[]>,
    required: true
  }
})

const currentPost = ref<PostType>({} as PostType)
const isShowEditModal = ref(false)

const handleEdit = (value: PostType): void => {
  currentPost.value = value
  isShowEditModal.value = true
}

const handleUpd = (value: boolean) => {
  isShowEditModal.value = value
}
</script>

<template>
  <div class="d-flex flex-wrap ga-3 justify-center">
    <post
      v-for="item in props.value"
      :key="item.id"
      :value="item"
      class="v-col-3"
    >
      <template #actions>
        <v-btn @click="handleEdit(item)">Edit</v-btn>
        <delete-post :id="item.id" />
      </template>
    </post>
  </div>
  <edit-post :value="currentPost" :is-show="isShowEditModal" @change="handleUpd" />
</template>
