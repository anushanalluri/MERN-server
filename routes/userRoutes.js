const express = require('express')
const router = express.Router()
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const { ApolloServer,gql } = require('apollo-server-express');
//:3001/users/register
const server = new ApolloServer({typeDefs,resolvers});
router.post('/register',async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const {data,error}= await server.executeOperation({
            query:gql`mutation{
                createUser(input:{name:"${name}",email:"${email}",password:"${password}"}){
                  id
                  email 
                  name
                  password
                }
              }`
        });
        if(error){return res.status(500).send({message:error}) }
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err});
    }
})
module.exports = router;