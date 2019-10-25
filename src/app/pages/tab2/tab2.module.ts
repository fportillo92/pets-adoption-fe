import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { PublicationsService } from '../../services/publications.service';
import { PetPublication } from '../../interfaces/interfaces';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule implements OnInit {

  publications: PetPublication[] = [];

  constructor(private publicationService: PublicationsService) {

  }

  ngOnInit() {
    this.publications = this.publicationService.getPetPublications();
  }
}
