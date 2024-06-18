import { GraphQLError } from 'graphql';

export function ErrorMessage(message) {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  });
}
