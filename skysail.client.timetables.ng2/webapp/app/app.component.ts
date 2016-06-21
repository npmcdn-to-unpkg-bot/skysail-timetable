import {Component} from '@angular/core';
import {SendmailComponent} from './services/sendmail.component';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-app',
    providers: [SendmailComponent, HTTP_PROVIDERS],
    template: `
    <h1>My First Angular 2 App</h1>
    <p>Aerobic <a href='#'>subscribe</a> <a href='#' (click)='sendMail()'>notify</a></p>
    `
})
export class AppComponent { 

    constructor(private _sendmailComponent: SendmailComponent) {

    }

    sendMail() {
        console.log("before");
        this._sendmailComponent
            .sendMail('evandor@gmail.com','mira.v.graef@gmail.com','testsubject','testcontent')
        console.log("after");
    }
}
