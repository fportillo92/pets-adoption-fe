import { Component, OnInit, Input } from '@angular/core';
import { PetPublication } from '../../interfaces/interfaces';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {

  @Input() petPublications: PetPublication[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.petPublications);
  }

}
