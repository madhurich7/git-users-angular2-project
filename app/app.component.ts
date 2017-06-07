/// <reference path="../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/core';
import {DataService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {GitUsers} from './git-users.component';

@Component({
    selector: 'my-app',
    template: `    
        <div *ngIf="isLoading"><i class="fa fa-spinner fa-3x"></i></div>
        <git-users></git-users>
    `,
    providers: [DataService, HTTP_PROVIDERS],
    directives: [GitUsers]
})
export class AppComponent implements OnInit {
	isLoading = true;
   
    constructor(private _dataService: DataService){
    	
    
    }

  

    ngOnInit(){
    	this._dataService.getData()
    						.then((res) => {
    							this.isLoading = false;
    							console.log(res);
    						});
    }
}