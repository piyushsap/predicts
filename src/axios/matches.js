import axios from "axios";

const instance = axios.create({
    baseURL: 'https://predict-c7701.firebaseio.com/',
})

export default instance;