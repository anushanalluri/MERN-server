const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors'); // Import cors module

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const userRoutes = require('./route/userRoutes'); // Correct import path for user routes

const app = express();
const port = 3001;
const url = 'mongodb+srv://prasunachandrika156:9LryQernxuYOB8Dd@cluster0.lt45cda.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    
    const server = new ApolloServer({ typeDefs, resolvers });
    server.start().then(() => {
      server.applyMiddleware({ app }); // Apply Apollo Server middleware to Express app
      app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
        console.log(`GraphQL endpoint: http://localhost:${port}${server.graphqlPath}`);
      });
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
  