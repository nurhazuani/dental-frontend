import axios from "axios"

axios.defaults.baseURL="http//localhost:8080/";

axios.defaults.header.common['Authorization'] = 'Bearer' + localStorage.getItem('token')