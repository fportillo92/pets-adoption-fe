import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { PetPublication } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  publications: PetPublication[] = [];

  constructor(private publicationService: PublicationsService) {

  }

  ngOnInit() {
    this.publications = this.publicationService.getPetPublications();
  }
}
