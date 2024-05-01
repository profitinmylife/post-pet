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
          this.posts.find((item: PostType) => {
            if (item.id === id) {
              item = data;
              return true;
            }
          })
        })
      } catch (e) {
        console.log(e)
      }
    },
    async deletePost(id: number) {
      try {
        await client.deleteData(`${id}`).then(() => {
          const currentPost = this.posts.findIndex((item: PostType) => item.id === id)

          this.posts.splice(currentPost, 1)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
})
