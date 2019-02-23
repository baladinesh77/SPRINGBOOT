import {Pipe} from '@angular/core'

@Pipe({
	name:'find'
})
export  class SearchPipe{
	transform(pipeData,arg){
		return pipeData.filter(eachItem=>{
			return eachItem['name'].toLowerCase().includes(arg.toLowerCase()) ||
				eachItem['shortname'].toLowerCase().includes(arg.toLowerCase());
		})
	}
}