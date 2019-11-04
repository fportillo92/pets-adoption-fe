export interface PetPublication {
    id: string;
    type: string;
    name: string;
    age: number;
    size: string;
    sex: string;
    health: string;
    description: string;
    state: string;
    petRequests: PetRequest[];
}

export interface Publisher {
    id: string;
    email: string;
    type: string;
    image: string;
    name: string;
    location: string;
    socialNetworks: string[];
    contact: string;
    description: string;
    petPublications: PetPublication[];
}

export interface Adopter {
    id: string;
    email: string;
    image: string;
    name: string;
    socialNetworks: string[];
    contact: string;
    petRequests: PetRequest[];
}

export interface PetRequest {
    id: string;
    petPublication: PetPublication;
    adopter: Adopter;
    state: string;
}
