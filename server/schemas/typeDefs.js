const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }`


module.exports = typeDefs;