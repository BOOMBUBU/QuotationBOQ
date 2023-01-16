const _axios = require("../axios");
module.exports = {
    async getTokenBOQ() {
        let token = "test";
        let url = process.env.BOQ_LINK_TOKEN;
        let data = {
            "username": process.env.BOQ_USER || "",
            "password": process.env.BOQ_PASS || ""
        }
        await _axios.axios_post(url, data).then(res => {
            if (res.statusCode === 200) {
                token = res?.data?.result?.access_token
            }
        })
        return token;
    },
    async getQuotationBOQ(QuotationNumber) {
        let key = "{QuotationNumber}";
        let token = await this.getTokenBOQ();
        let url = process.env.BOQ_GetQuotation_API.replace(key, QuotationNumber);
        let result = await _axios.axios_get(url, {}, token);
        console.log("result",result);
        return result;
    }
}

