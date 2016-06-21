import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class SendmailComponent {

    authHeader = new Headers();

    // url = "https://api.mailgun.net/v3/sandboxc553a4d53f224995804921bd11891114.mailgun.org";
    url = "http://localhost:2018/demoapp/v1/mailgun";

    constructor(private _http: Http) {
        // this.authHeader.append('Authorization','key-d00353c2873a61a41be8eb91f9bfcaa5');
        //this.authHeader.append("Authorization", "Basic " + btoa("api:key-d00353c2873a61a41be8eb91f9bfcaa5"));
        //this.authHeader.append("Access-Control-Allow-Origin", "*");
    }

    sendMail(from: string, to: string, subject: string, content: string) {

        let body = JSON.stringify({ content });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this._http.post(this.url, body, options)
            .subscribe(
            (data) => console.log(data),
            (err) => console.log(err)
            );
        ;
    }
}