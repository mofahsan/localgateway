const axios = require("axios")
const SELLER_SERVICE_ADAPTER_URL = process.env.SELLER_SERVICE_ADAPTER_URL
const {ACK,NACK} = require("../responses/response");

const handleSearch = async(req,res)=>{
    try{
        console.log("request received ",req.query)
        const body = req.body
        if(!body.context || !body.context.bap_uri ||!body.message){
            body.message = NACK
            return res.status(400).send(NACK)
        }

        const ACTION = body.context.action;
        const response = axios.post(`${SELLER_SERVICE_ADAPTER_URL}/${ACTION}`,body)
        body.message = ACK
        return res.status(200).send(body)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = handleSearch