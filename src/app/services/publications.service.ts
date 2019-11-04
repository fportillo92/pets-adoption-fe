import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-link';
import { PetPublication } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { PUBLICATIONS_QUERY } from '../operations/query';


@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  public petsPublication: PetPublication[] = [];

  constructor(private apollo: Apollo) { }

  getPetPublications(description: boolean = true, petRequests: boolean = true) {
    return this.apollo.watchQuery({
      query: PUBLICATIONS_QUERY,
      variables: {
        description,
        petRequests
      }
    })
    .valueChanges.pipe( map( (result: any) => {
        return result.data;
    }));
  }
}
