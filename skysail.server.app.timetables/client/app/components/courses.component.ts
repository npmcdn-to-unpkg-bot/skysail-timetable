import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {CoursesService} from '../services/courses.service'
import {BackendServices} from '../services/backend.service'

@Component({
    templateUrl: 'app/html/courses.template.html',
    providers: [HTTP_PROVIDERS, CoursesService, BackendServices]
})
export class CoursesComponent implements OnInit {
    
    isLoading = true;
    courses = []; 
    
    constructor(private _backend: BackendServices){        
        console.log("constructor called");
        _backend.setBaseUrl('http://jsonplaceholder.typicode.com/');
    }
    
    onInit() {
        console.log("Am I ever called?")
    }
    
    ngOnInit(){
        console.log("oninit called");
        this._backend.get('posts')
            .subscribe(res => this.courses = res);
        //.subscribe(res => console.log(res));
    }
}