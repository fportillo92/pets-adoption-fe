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

export const CREATE_ADOPTER = gql`
    mutation createAdopterM($email: String!,
                            $image: String!,
                            $name: String!,
                            $contact: String!) {
        createAdopter(email: $email,
                      image: $image,
                      name: $name,
                      contact: $contact) {
            email
            image
            name
            contact
        }
    }
`;

export const UPDATE_ADOPTER = gql`
    mutation updateAdopterM($id: ID!,
                            $image: String,
                            $name: String!,
                            $contact: String) {
        updateAdopter(id: $id,
                      image: $image,
                      name: $name,
                      contact: $contact) {
            id
            image
            name
            contact
        }
    }
`;

export const DELETE_ADOPTER = gql`
mutation deleteAdopterM($id: ID!) {
    deleteAdopter(id: $id) {
        id
    }
}
`;

export const CREATE_PUBLICATION = gql`
    mutation createPublicationM($publisherId: ID!,
                                $type: PetEnum!,
                                $name: String!,
                                $age: Int!,
                                $size: SizeEnum!,
                                $sex: SexEnum!,
                                $health: HealthEnum!,
                                $description: String,
                                $location: String!) {
        createPetPublication(publisherId: $publisherId,
                          type : $type,
                          name: $name,
                          age: $age,
                          size: $size,
                          sex: $sex,
                          health: $health,
                          description: $description,
                          location: $location) {
            publisherId
            type
            name
            age
            size
            sex
            health
            description
            location
        }
    }
`;

export const UPDATE_PUBLICATION = gql`
    mutation updatePublicationM($id: ID!,
                                $type: PetEnum!,
                                $name: String!,
                                $age: Int!,
                                $size: SizeEnum!,
                                $sex: SexEnum!,
                                $health: HealthEnum!,
                                $description: String,
                                $location: String!) {
        updatePetPublication(id: $id,
                          type : $type,
                          name: $name,
                          age: $age,
                          size: $size,
                          sex: $sex,
                          health: $health,
                          description: $description,
                          location: $location) {
            id
            type
            name
            age
            size
            sex
            health
            description
            location
        }
    }
`;

export const DELETE_PUBLICATION = gql`
    mutation deletePublication($id: ID!) {
        deletePetPublication(id: $id) {
            id
        }
    }
`;

export const CREATE_PET_REQUEST = gql`
    mutation createPetRequestM($petPublicationId: ID!,
                               $adopterId: ID!) {
        createPetRequest(petPublicationId: $petPublicationId,
                         adopterId : $adopterId) {
            petPublicationId
            adopterId
        }
    }
`;

export const APPROVE_PET_REQUEST = gql`
    mutation approvePetRequestM($id: ID!) {
        approvePetRequest(id: $id) {
            id
        }
    }
`;

export const DELETE_PET_REQUEST = gql`
    mutation deletePetRequestM($id: ID!) {
        deletePetRequest(id: $id) {
            id
        }
    }
`;
