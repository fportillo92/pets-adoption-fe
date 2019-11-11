import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications/publications.component';
import { IonicModule } from '@ionic/angular';
import { PublicationComponent } from './publication/publication.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';



@NgModule({
  declarations: [
    PublicationsComponent,
    PublicationComponent,
    PublicationDetailComponent,
    CreatePublicationComponent
  ],
  exports: [
    PublicationsComponent,
    PublicationComponent,
    PublicationDetailComponent,
    CreatePublicationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
