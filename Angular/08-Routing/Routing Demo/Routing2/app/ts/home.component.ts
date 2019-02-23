
import {Component} from '@angular/core'
import  {Router} from '@angular/router';

@Component({
	selector:'home',
	templateUrl:'app/partials/home.html'
})
export  class HomeComponent{

	constructor(private router:Router){

	}

	gotoList(){
		this.router.navigate(['/list']);
		//this.router.navigate(['/details', item.id]);
	}
}