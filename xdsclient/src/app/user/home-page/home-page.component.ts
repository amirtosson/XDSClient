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
    return this.http.post('http://141.99.126.56:3000/home',this.noAuthHeader);
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
