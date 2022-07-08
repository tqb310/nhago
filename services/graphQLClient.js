import { GraphQLClient } from 'graphql-request';

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URI, {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
});

export default graphQLClient;
