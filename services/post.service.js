import graphQLClient from './graphQLClient';
import { gql } from 'graphql-request';

export async function getDataSize() {
    const query = gql`
        query getAllPosts {
            posts {
                id
            }
        }
    `;
    try {
        const jsonData = await graphQLClient.request(query);

        return jsonData.posts?.length || 0;
    } catch (error) {
        throw error;
    }
}

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

export async function getAllPostSlugs() {
    const query = gql`
        query getAllPostSlugs {
            posts {
                slug
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

export async function getRecentPost(last) {
    const query = gql`
        query getRecentPost($last: Int!) {
            posts(orderBy: createdAt_ASC, last: $last) {
                title
                featuredImage {
                    url
                }
                excerpt
                id
                createdAt
                slug
                author {
                    name
                    id
                }
            }
        }
    `;
    try {
        const jsonData = await graphQLClient.request(query, { last });

        return jsonData.posts;
    } catch (error) {
        throw error;
    }
}

export async function getPostByPage(page) {
    const query = gql`
        query getRecentPost($skip: Int!) {
            posts(skip: $skip, last: 8) {
                title
                featuredImage {
                    url
                }
                excerpt
                id
                createdAt
                slug
                author {
                    name
                    id
                }
            }
        }
    `;
    try {
        const skip = (page - 1) * 8;
        const jsonData = await graphQLClient.request(query, { skip });

        return jsonData.posts;
    } catch (error) {
        throw error;
    }
}

export async function getPostDetail(slug) {
    const query = gql`
        query getPostDetail($slug: String!) {
            post(where: { slug: $slug }) {
                content {
                    markdown
                }
                createdAt
                featuredImage {
                    url
                }
                author {
                    bio
                    name
                    photo {
                        url
                    }
                }
                title
                slug
            }
        }
    `;
    try {
        const jsonData = await graphQLClient.request(query, { slug });

        return jsonData.post;
    } catch (error) {
        throw error;
    }
}
