
import {Component} from "@angular/core";

@Component({
	selector:'demo1',
	template:`<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<h3>{{title}}</h3>
				<p>{{content}}</p>
			</div>
			</div>`,
	inputs:['content','title']
})
export class Demo1Component{
	title:string;
	content:string;
}
