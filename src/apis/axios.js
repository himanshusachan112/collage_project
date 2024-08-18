import axios from "axios"

export const search_api=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const getPosts=async () =>{
    const response=await search_api.get('/posts')
    return response.data
}