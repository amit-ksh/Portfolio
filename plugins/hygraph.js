import { GraphQLClient } from 'graphql-request';

const hygraphClient = new GraphQLClient(
  'https://ap-south-1.cdn.hygraph.com/content/clbbncdq811um01ufdcf3bxfs/master'
);

export default (_, inject) => {
  inject('hygraph', hygraphClient);
};