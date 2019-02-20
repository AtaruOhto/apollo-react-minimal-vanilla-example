const { ApolloServer } = require("apollo-server");
const typeDefs = require('./schema');
const resolvers = require('./resolver')
const User = require('./db/models/User');
const { getDB } = require('./db')


const boot = async () => {
  const store = await getDB();

  const server = new ApolloServer({
    cors: { 
      cors: {
        origin: '*',
        credentials: true,
      }
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
      User: new User({ store })
    }),
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

boot();

