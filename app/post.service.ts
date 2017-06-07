import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';
import {Post} from './post';


@Injectable()

export class DataService{
	private url = 'https://jsonplaceholder.typicode.com/posts';
	constructor(private _http: Http){

	}

	getData(): Promise<Post[]>{
		return this._http.get(this.url)
							.map((res) => res.json())
							.toPromise();

	}

	postData(postObj: Post){
		return this._http.post(this.url, JSON.stringify(postObj))
							.map((res) => res.json());
	}
}