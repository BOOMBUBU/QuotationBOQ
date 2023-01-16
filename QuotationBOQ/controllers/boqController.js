const BOQ_API = require("../api/methods/BoqApi")
exports.UpdateBOQ = async (req, res) => {
    try {
        let QuotationNumber = req.body?.QuotationNumber;
        let result = await BOQ_API.getQuotationBOQ(QuotationNumber);
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(400);
        res.json({ "error": error.message });
    }

};
