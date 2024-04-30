import { computed, onMounted } from 'vue'
import { usePostsStore } from '../../../entities'

export const useMain = () => {
  onMounted(async () => {
    await usePostsStore().fetchPosts()
  })

  const posts = computed(() => usePostsStore().getPosts)

  return {
    posts
  }
}
