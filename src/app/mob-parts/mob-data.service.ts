//import { MOBPARTS } from './mocks';
import { MobPartDataTypes } from './MobDatTypes';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class MobDataService {
	constructor(private http:Http){}
	
	getMobParts(){

		//return MOBPARTS;
		return this.http.get('assets/data/mob-parts.json')
		.pipe(map(response => <MobPartDataTypes[]>response.json().data));
	

	}
}
