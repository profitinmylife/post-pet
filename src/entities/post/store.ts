import { defineStore } from 'pinia'
import { httpClient, PostType } from '../../shared'

const client = httpClient()

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts : [] as PostType[],
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    async fetchPosts() {
      try {
        this.posts = await client.get()
      } catch (e) {
        console.log(e)
      }
    },
    async createPost(data: PostType) {
      try {
        await client.post(data).then(() => {
          this.fetchPosts()
        })
      } catch (e) {
        console.log(e)
      }
    },
    async updatePost(id: number, data: PostType) {
      try {
        await client.put(id, data).then(() => {
          const currentIndex = this.posts.findIndex((item: PostType) => item.id === id)

          this.posts[currentIndex] = data
        })
      } catch (e) {
        console.log(e)
      }
    },
    async deletePost(id: number) {
      try {
        await client.deleteData(`${id}`).then(() => {
          const currentIndex = this.posts.findIndex((item: PostType) => item.id === id)

          this.posts.splice(currentIndex, 1)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
})
