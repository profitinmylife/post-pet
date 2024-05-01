import { computed, onMounted } from 'vue'
import { usePostStore } from '../../../entities'

export const useMain = () => {
  onMounted(async () => {
    await usePostStore().fetchPosts()
  })

  const posts = computed(() => usePostStore().getPosts)

  return {
    posts
  }
}
