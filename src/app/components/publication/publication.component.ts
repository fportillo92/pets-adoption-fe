import { Component, OnInit, Input } from '@angular/core';
import { PetPublication } from '../../interfaces/interfaces';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {

  @Input() publication: PetPublication;

  constructor() { }
  
  ngOnInit() {
    console.log(this.publication);
  }

}
