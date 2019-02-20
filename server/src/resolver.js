// Provide resolver functions for your schema fields
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
      const user = await dataSources.User.findOrCreate({where: { name }});
      return user[0].dataValues
    },
  },
};

module.exports = resolvers;