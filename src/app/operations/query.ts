import gql from 'graphql-tag';

export const PUBLICATIONS_QUERY = gql`
    query publicationsQuery($description: Boolean!, $petRequests: Boolean!) {
        petPublications {
            id
            type
            name
            age
            size
            sex
            health
            description @skip(if: $description)
            state
            petRequests @skip(if: $petRequests)
        }
    }`;

export const PUBLISHER_QUERY = gql`
    query publisherQuery($image: Boolean!,
                         $socialNetworks: Boolean!,
                         $contact: Boolean!,
                         $description: Boolean!,
                         $petPublications: Boolean!) {
        publisher {
            id
            email
            type
            image @skip(if: $image)
            name
            location
            socialNetworks @skip(if: $socialNetworks)
            contact @skip(if: $contact)
            description @skip(if: $description)
            petPublications @skip(if: $petPublications)
        }
    }`;
