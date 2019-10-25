import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-link';
import { PetPublication } from '../interfaces/interfaces';

const petPublicationsQuery = gql`
{
  petPublications {
    id
    name
    age
    description
  }
 }`;

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  public petsPublication: PetPublication[] = [];

  constructor(private apollo: Apollo) { }

  getPetPublications() {
    this.apollo.watchQuery({
      query: petPublicationsQuery,
    })
    .valueChanges.subscribe( ({data}) => {
        this.petsPublication = data as PetPublication[];
    });

    return this.petsPublication;
  }
}
