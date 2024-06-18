import { ErrorMessage } from '../error.mjs';

export default {
  Query: {
    getSource: async (_root, data, conext) => {
      return 'source';
    },
    getRoute: async (_root, data, conext) => {
      return 'route';
    },
  },
  Mutation: {
    print: async (_root, { data: { name } }, context) => {
      return { name, code: Math.floor(Math.random() * 10000) };
    },
  },
};
