const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
        searchUsers(name: String!): [User]
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

    input UpdateUserInput {
        name: String!
        email: String!
        password: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUser(id: ID!, input: UpdateUserInput!): User
        deleteUser(id: ID!): User
        changePass(id: ID!, password: String!): User
    }
`;

module.exports = typeDefs;
