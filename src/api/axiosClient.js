import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = (url, params) => {
    let param = "";
    let key, data;
    const baseURL = apiConfig.baseUrl;
    const api_key = apiConfig.apiKey;

    if (JSON.stringify(params.params) === "{}") {

    } else {
        key = Object.keys(params.params)[0];
        data = params.params[key];
        console.log(key, data);
    }
    // console.log(baseURL + url + "?api_key=" + api_key + `${query ? `&query=${query}` : ""}`);

    return axios.get(baseURL + url + "?api_key=" + api_key + `&${key}=${data}`);
}

export default axiosClient;