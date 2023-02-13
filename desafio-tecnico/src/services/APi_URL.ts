import axios from 'axios'

const API_KEY = "AIzaSyDdCcE66KiARzlk7HUjfEEqznLSr1S1M_s"

const API_URL = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: API_KEY
    }
})

export default API_URL;
