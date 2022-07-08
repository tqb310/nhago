import graphQLClient from './graphqlClient';
import { gql } from 'graphql-request';

export async function getAllPosts() {
    const query = gql`
        query getAllPosts {
            posts {
                id
                createdAt
                excerpt
                featuredPost
                slug
                title
                featuredImage {
                    url
                }
                author {
                    name
                    id
                    photo {
                        url
                    }
                }
            }
        }
    `;
    try {
        const jsonData = await graphQLClient.request(query);

        return jsonData.posts;
    } catch (error) {
        throw error;
    }
}
