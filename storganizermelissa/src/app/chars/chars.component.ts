import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Char } from './char';
import { CharService } from './char.service';


@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.sass'],
  providers: [CharService]
})
export class CharsComponent implements OnInit {
	title= 'Storganizer';
	selectedChar: Char;

	chars: Char[];

  class constructor(private charService: CharService) {

  	this.getChars(): void{
  		this.charService.getChars().then(chars => this.chars = chars)
  	}

  	this.ngOnInit(): void { 
  		this.getChars()
  	}

  	onselect(char: Char): void {
  		this.selectedChar = char;
  	}

  }

  ngOnInit() {
  }

}
