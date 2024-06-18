import { PubSub } from 'graphql-subscriptions';
import mongoose from 'mongoose';

// !! Error Message Function
function ErrorMessage(message = 'the error message') {
  return new GraphQLError(message, {
    extensions: {
      code: 'SOMETHING_BAD_HAPPENED',
      http: {
        status: 404,
        headers: new Map([
          ['some-header', 'it was bad'],
          ['another-header', 'seriously'],
        ]),
      },
    },
  });
}

// !! Resolvers
const resolvers = {
  Query: {
    getSource: async (_root, data, conext) => {
      return 'http://localhost:8000/graphql';
    },
  },
};

export { resolvers };
