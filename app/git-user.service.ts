import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class GitService{
	// private usersUrl = 'https://api.github.com/users/octocat';
	// private followersUrl = 'https://api.github.com/users/octocat/followers';
	constructor(private _http: Http){

	}

	getUsers(userHere){
		return this._http.get('https://api.github.com/users/' + userHere)
					.map((res) => res.json());
	}

	getFollowers(userHere){
		return this._http.get('https://api.github.com/users/' + userHere + '/followers')
					.map((x) => x.json());
	}


}