import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://localhost:8080",
})


axiosApi.defaults.headers.post['Content-Type'] = 'application/json';
// axiosApi.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axiosApi.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
// axiosApi.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
// axiosApi.defaults.headers.post['SBC'] = 'adfdjfh';

export default axiosApi;