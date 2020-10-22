import axios from "axios"
import qs from "qs"

axios.defaults.withCredentials = true;

const baseURL = '';

export default {
    async exampleGetRequest(param = {}) {
        let result = await axios.get(`${baseURL}/api?${qs.stringify(param)}`);
        return result;
    },
    async examplePostRequest(param = {}) {
        let result = await axios.post(`${baseURL}/api`, param);
        return result;
    },
}
