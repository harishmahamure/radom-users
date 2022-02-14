import axios from 'axios'

export const api = axios.create({
    baseURL:"https://randomuser.me/",
    timeout:60000,
}) 