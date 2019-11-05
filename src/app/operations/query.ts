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
        publishers {
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

export const ADOPTER_QUERY =  gql`
    query adopterQuery($image: Boolean!,
                         $socialNetworks: Boolean!,
                         $contact: Boolean!,
                         $petRequests: Boolean!) {
        adopters {
            id
            email
            image @skip(if: $image)
            name
            socialNetworks @skip(if: $socialNetworks)
            contact @skip(if: $contact)
            petRequests @skip(if: $petRequests)
        }
    }`;

export const PET_REQUEST_QUERY = gql`
    query petRequestQuery($state: string) {
        petRequests {
            id
            petPublication
            adopter
            state @skip(if: $state)
        }
    }`;
