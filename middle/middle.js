const {json} =require("express");
const jwt =require("jsonwebtoken");

const { json } = require("express");
const jwt = require("jsonwebtoken")

function tokenTest (req,res,next){
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            console.log(req.headers.authorization.split(" ")[1],"hgdsbhbjsjsjdj");
            
            token =req.headers.authorization.split(" ")[1];
            jwt.verify(token,"rufaid111")
            next()
       
        }catch (error){
            res.json("not authorized ,token not token")
            console.log(error);
        }
    }else{
        res.json("no token")
        // console.log("no token");
    }
}

module.exports = tokenTest;