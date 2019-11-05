import gql from 'graphql-tag';

export const CREATE_PUBLISHER = gql`
    mutation createPublisherM($email: ID!,
                              $type: PublisherEnum!,
                              $image: String!,
                              $name: String!,
                              $location: String!,
                              $contact: String!,
                              $description: String) {
        createPublisher(email: $email,
                        type : $type,
                        image: $image,
                        name: $name,
                        location: $location,
                        contact: $contact,
                        description: $description) {
            email
            type
            image
            name
            location
            contact
            description
        }
    }
`;

export const UPDATE_PUBLISHER = gql`
    mutation updatePublisherM($id: ID!,
                              $type: PublisherEnum!,
                              $image: String!,
                              $name: String!,
                              $location: String!,
                              $contact: String!,
                              $description: String) {
        updatePublisher(id: $id,
                        type : $type,
                        image: $image,
                        name: $name,
                        location: $location,
                        contact: $contact,
                        description: $description) {
            id
            type
            image
            name
            location
            contact
            description
        }
    }
`;

export const DELETE_PUBLISHER = gql`
    mutation deletePublisherM($id: ID!) {
        deletePublisher(id: $id) {
            id
        }
    }
`;
