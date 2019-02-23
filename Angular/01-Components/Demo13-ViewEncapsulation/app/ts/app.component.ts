import {Component, ViewEncapsulation} from '@angular/core'
import {MoviesListComponent} from './movies-list.component'
import {AlbumsListComponent} from './album-list.component'

@Component({
     selector: 'my-app',
     template:`<h1>Shopping application</h1><hr/>
			<h3>Welcome to my application</h3>
			<myMovies></myMovies>
			<myAlbums></myAlbums>`,
	directives:[MoviesListComponent,AlbumsListComponent],
	styles:[`
		h3{
			color:blue;
			background-color:palegreen;
		}
		h4{
			color:red;
		}
		li{
			color:orange;
		}
	`],
	encapsulation:ViewEncapsulation.Native
})

export class AppComponent {
}

