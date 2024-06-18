import sourceResolver from './source.resolver.mjs';
import pkg from 'lodash';

const { merge } = pkg;

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
const resolvers = merge({}, sourceResolver);

export { resolvers };
