import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { PublicationsComponent } from '../../components/publications/publications.component';
import { PublicationsService } from '../../services/publications.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PublicationsComponent,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  providers: [
    PublicationsService
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
}
