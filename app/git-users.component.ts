import {Component, OnInit, Input, OnChanges, AfterContentInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {GitService} from './git-user.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';


@Component({
	selector: 'git-users',
	templateUrl: 'app/git-users.component.html',
	styles: [`
		.avatar{
			width: 150px;
			height: 150px;
			border-radius: 50%;
		}
		.followers{
			color: blue;
		}
	`],
	providers: [GitService, HTTP_PROVIDERS]
})

export class GitUsers implements OnInit, OnChanges, AfterContentInit{
	userHere = 'octocat';
	public user;
	public followers;
	public loadingUsers = true;
	getUserData;
	constructor(private gitService: GitService){
		
		
	}

	callObservable(){
		Observable
				.forkJoin(this.gitService.getUsers(this.userHere), 
						this.gitService.getFollowers(this.userHere))
						.map((joined) => new Object({
							user: joined[0],
							followers: joined[1]
						}))
						.subscribe(x => {
							this.user = x;
							this.loadingUsers = false;
							//this.followers = x.followers;
							console.log(this.user);
						});	
	}

	
	ngOnInit(){
		this.getUserData = (f) => {
			this.userHere = f.controls.enteredUser.value;
			console.log(f.controls.enteredUser.value);	
			this.callObservable();
		}	
		
	}

	ngOnChanges(){
		console.log('on changes');
	}
	ngAfterContentInit(){
		console.log('after content init');
		this.callObservable();
	}
}