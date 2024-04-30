import axios from 'axios'

const httpClient = () => {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts'

  const instance = axios.create({
    baseURL: baseURL,
    timeout: 2000,
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })

  const get = async (url?: string) => {
    return instance.get(url).then(res => res.data)
  }

  const post = (data: any) => {
    return instance.post(baseURL, data)
  }

  const deleteData = (id: string) => {
    return instance.delete(`${baseURL}/${id}`)
  }

  const put = (id: number, data: any) => {
    return instance.put(`${baseURL}/${id}`, data)
  }

  return {
    get, put, deleteData, post
  }
}

export {
  httpClient
}
