
import {Component} from "@angular/core";
/*
Declare an output variable name and print it in the template
Apply or remove css styles using [clas.classname] directive
Declare a local variable inputText using #symbol and use it to decide whether the css class to be applied or not
use (keyup)="0" to update the UI on keychange, ie we are not calling any specific method.
 */
@Component({
	selector:'my-component',
	template:`<h2>Sample component</h2>
			<p>
				Hi, I am <span [style.backgroundColor]="inputText.value==='yes'?'lightgray':''">{{name}}</span>, This is my Angular2 application.
				<span [class.is-awesome]="inputText.value==='yes'">It's awesome</span>
			</p>
			Is it awesome?
			<input type="text" #inputText (keyup)="0">
			<br><br>
			<button [disabled]="inputText.value!=='yes'">Submit</button>
			`,
	styles:[
		`.is-awesome{
			font-weight:bold;
			color:red;
		}`]
})
export class MyComponent{
	name="Sonu Sathyadas";
}