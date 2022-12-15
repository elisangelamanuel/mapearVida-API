const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).json({
        title: "Mapear Vida - mapear é um ato político - colabore mapeando um ponto de segurança alimentar no município",
        version: "1.0.0"
    })
})

module.exports = router