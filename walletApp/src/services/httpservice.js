import axios from "axios";

const HttpService = axios.create({
    baseURL: 'http://192.168.0.115:3000/api/'
})

export default HttpService;
