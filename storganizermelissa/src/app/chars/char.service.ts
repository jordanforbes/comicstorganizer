import { Injectable } from '@angular/core';

import { Char } from './char';
import { CHAR } from './charlist'

@Injectable()
export class CharService {
	getChars(): Promise<Char[]>{
		return Promise.resolve(CHAR)

	}
}
