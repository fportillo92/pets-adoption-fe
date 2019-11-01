import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-link';
import { PetPublication } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { listPublications } from '../operations/query';


@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  public petsPublication: PetPublication[] = [];
  loading: boolean = true;

  constructor(private apollo: Apollo) { }

  getPetPublications() {
    return this.apollo.watchQuery({
      query: listPublications,
    })
    .valueChanges.pipe( map( (result: any) => {
        return result.data;
    }));
  }
}
