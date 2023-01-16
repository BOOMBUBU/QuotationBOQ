const axios = require("axios");
module.exports = {
    async axios_get(url, data, token = null) {
        const method = "get";
        const headers = {};
        if (token) {
            headers["Authorization"] = 'Bearer ' + token;
        }
        try {
            const response = await axios({
                method,
                url,
                data,
                headers,
            });
            error = 0;
            return response;
        } catch (e) {
            return e.response;
        }
    },
    async axios_post(url, data, token = null) {
        const method = "post";
        const headers = {};
        if (token) {
            headers["Authorization"] = 'Bearer ' + token;
        }
        try {
            const response = await axios({
                method,
                url,
                data,
                headers,
            });
            error = 0;
            return response.data;
        } catch (e) {
            return e.response;
        }
    }

}


