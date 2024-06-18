import { ErrorMessage } from '../error.mjs';

export default {
  Query: {
    getSource: async (_root, data, conext) => {
      return ErrorMessage('error');
    },
    getRoute: async (_root, data, conext) => {
      return 'graphql';
    },
  },
};
