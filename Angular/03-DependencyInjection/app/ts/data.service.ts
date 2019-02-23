

import {Injectable} from "@angular/core";
@Injectable()
export class DataService{
	private names:string[]=["Praveen", "Kiran", "Sekhar", "Kishore"];

	getNames():string[]{
		return this.names;
	}

}