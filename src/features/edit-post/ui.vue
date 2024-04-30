<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import type { PostType } from '../../shared'
import { usePostsStore } from '../../entities'

const props = defineProps({
  value: {
    type: Object as PropType<PostType>,
    required: true
  },
  isShow: {
    type: Boolean,
    default: false
  }
})

const innerValue = ref<PostType>({} as PostType);
const store = usePostsStore()

watch(() => props.value, (newValue) => {
  innerValue.value = newValue;
}, { deep: true, immediate: true })

const emit = defineEmits(['change', 'save']);

const handleChange = (value: boolean) => {
  emit('change', value)
}

const handleSave = async () => {
  await store.updatePost(innerValue.value?.id, innerValue.value)

  emit('change', false)
}
</script>

<template>
  <v-dialog
    :model-value="props.isShow"
    width="500"
    @update:modelValue="handleChange"
  >
    <v-card
      max-width="400"
      prepend-icon="mdi-update"
      title="Update post"
    >
      <v-card-text>
        <v-text-field
          v-model="innerValue.userId"
          label="userId"
          required
        />
        <v-text-field
          v-model="innerValue.title"
          label="title"
          required
        />
        <v-text-field
          v-model="innerValue.body"
          label="body"
          required
        />
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Save"
          @click="handleSave"
        />
        <v-btn
          class="ms-auto"
          text="Close"
          @click="handleChange(false)"
        />
      </template>
    </v-card>
  </v-dialog>
</template>
