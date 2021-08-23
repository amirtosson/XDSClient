import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
      body: [
        {
            "id": 1
        },
        {
            "id": 2
        }
    ],
    };


  this.http.post("http://localhost:5000/login",requestOptions ).subscribe(
    data => {
     console.log(data);
  }
  )


  }

}
