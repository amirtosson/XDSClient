import { Component, OnInit } from '@angular/core';
import { NewsDatServerFunctions } from "../../servercommunications/news-data-server-function";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {from} from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  noAuthHeader = { headers: new HttpHeaders({
    'Content-Type':'application/json', 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS'
  })};
  constructor(private http: HttpClient) { }
  getUserProfile(){
    return this.http.get('http://localhost:3000/',this.noAuthHeader);
  }

  getData(): Observable<any> {
    return from(
      fetch(
        'http://localhost:5000/todo/tasks', // the url you are trying to access
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          method: 'GET', // GET, POST, PUT, DELETE
          mode: 'no-cors' // the most important option
        }
      ));
  }

  ngOnInit(): void {
  }
  
  Clicked() {
    console.log("res");
   this.getUserProfile().subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    }
   )

  }
}
