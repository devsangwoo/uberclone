import { Greeting } from 'src/types/graph';

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: true,
        text: 'love you',
      };
    },
  },
};

export default resolvers;
