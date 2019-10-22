import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Char } from './char';
import { CharService } from './char.service';


@Component({
  selector: 'app-chars',
  //template: `{{title}} `,
  templateUrl: 'chars.component.html',
  styleUrls: ['./chars.component.sass'],
  providers: [CharService]
})
// export class CharsComponent implements OnInit {
export class CharsComponent {
	title: string;
	myChar: string;

  constructor() {
  	this.title = 'organizer';
  	this.myChar= 'Marissa Martinez';


  }

  // ngOnInit() {
  // }

}
