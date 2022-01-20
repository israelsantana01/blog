const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();
console.log('Running...');