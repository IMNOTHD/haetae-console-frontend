import axios from "axios"
import qs from "qs"

axios.defaults.withCredentials = true;

// todo DO NOT FORGET REMOVE URL BEFORE COMMIT
const baseURL = "https://hupanyouth.cn";

export default {
    async exampleGetRequest(param = {}) {
        let result = await axios.get(`${baseURL}/api?${qs.stringify(param)}`);
        return result;
    },
    async examplePostRequest(param = {}) {
        let result = await axios.post(`${baseURL}/api`, param);
        return result;
    },

    async login(param = {}) {
        let result = await axios.post(`${baseURL}/user/token`, qs.stringify(param));
        return result;
    },

    async getUserInfo(token) {
        let result = await axios.get(`${baseURL}/user/token`, {
            headers: {
                "Authorization": token,
            }
        });
        return result;
    },
}
