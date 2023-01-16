
const express = require("express");
const router = express.Router();
const BOQ = require("../controllers/boqController")
const middleware = (req, res, next) => {
    const token = process.env.APP_ID;
    if (req.headers.authorization === token)
        next(); //อนุญาตให้ไปฟังก์ชันถัดไป
    else {
        res.status(401);
        res.send("Unauthorized");
    }
};
router.post("/BOQ/UpdateBOQ", middleware, BOQ.UpdateBOQ);

module.exports = router;