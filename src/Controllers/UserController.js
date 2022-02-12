var mongoose = require("mongoose");
var Joi = require("joi");
var status = require("../Modules/status");
const bcrypt = require("bcryptjs");
var common = require("../Modules/commonFunctions");
var country = require("country-state-city").default;
const jwt = require("jsonwebtoken");
const config = require("../Helpers/config");
exports.login = async(req,res)=>{
    try {
        let data = "this is login";
        res.status(200).json({ response: data, message: "success" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}