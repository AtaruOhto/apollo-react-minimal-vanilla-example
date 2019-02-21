const resolvers = {
  Query: {
    /*
      {
        hello
      }
    */
    hello: (root, args, context) => "World!",

    /*
    {
      users {
        id
        name
      } 
    }
    */
    users: async (root, args, { dataSources }) => {
      return await dataSources.User.findAll();
    }
  },

  Mutation: {
    /*
      mutation createUserTest {
        User: createUser(name: "hello") {
          id
        }
      }
    */
    createUser: async (_, { name }, { dataSources }) => {
      await dataSources.User.findOrCreate({where: { name }});
      return await dataSources.User.findAll();
    },
  },
};

module.exports = resolvers;