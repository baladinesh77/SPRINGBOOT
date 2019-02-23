
import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from "./contact";

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
	transform(value: string): string {
		let temp:string="";
		for(let i=0;i<value.length;i++){
			temp=value[i] + temp;
		}
		return temp;
	}
}

@Pipe({name: 'startsWith'})
export class StartsWithPipe implements PipeTransform {
	transform(data: Contact[],text:string,column?:string): Contact[] {
		if(text==undefined || text===''){
			return data;
		}
		let temp:Contact[]=[];
		if(column==="name") {
			for(let item of data) {
				if(item.name.startsWith(text)) {
					temp.push(item);
				}
			}
		}
		else if(column==="mobile"){
			for(let item of data) {
				if(item.mobile.startsWith(text)) {
					temp.push(item);
				}
			}
		}
		else{
			for(let item of data) {
				if(item.name.startsWith(text) || item.mobile.startsWith(text)) {
					temp.push(item);
				}
			}
		}
		return temp;
	}
}
