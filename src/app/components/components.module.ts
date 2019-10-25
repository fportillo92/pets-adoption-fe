import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications/publications.component';
import { IonicModule } from '@ionic/angular';
import { PublicationComponent } from './publication/publication.component';



@NgModule({
  declarations: [
    PublicationsComponent,
    PublicationComponent
  ],
  exports: [
    PublicationsComponent,
    PublicationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
