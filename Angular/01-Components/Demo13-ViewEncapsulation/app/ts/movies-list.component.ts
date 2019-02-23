
import {Component,ViewEncapsulation} from '@angular/core'

@Component({
	selector:'myMovies',
	template:`<div>
				<h4>Movies List</h4>
				<ul>
				<li>Deadpool</li>
				<li>Superman vs Batman</li>
				<li>Interstellar</li>
				<li>Conjuring 2</li>
				</ul>
			</div>`,
	encapsulation:ViewEncapsulation.None
})
export class MoviesListComponent{

}