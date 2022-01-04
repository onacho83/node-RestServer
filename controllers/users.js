const { request, response} = require('express');

const userGet = (req, res=response)=>{
    res.json({
        msg: 'user Get'
    });
}
const userPost = (req, res=response)=>{
    res.json({
        msg: 'user Post'
    })
}
const userPut = (req, res=response)=>{
    res.json({
        msg: 'user Put'
    })
}
const userPatch = (req, res=response)=>{
    res.json({
        msg: 'user Patch'
    })
}
const userDelete = (req, res=response)=>{
    res.json({
        msg: 'user Delete'
    })
}

module.exports = {
    userDelete,
    userGet,
    userPatch,
    userPost,
    userPut
}