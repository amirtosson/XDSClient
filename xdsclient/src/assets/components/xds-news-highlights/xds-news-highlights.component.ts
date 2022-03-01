import { Component, OnInit } from '@angular/core';
import {NewsDatServerFunctions} from "../../../app/servercommunications/news-data-server-function";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {from} from 'rxjs';
@Component({
  selector: 'app-xds-news-highlights',
  templateUrl: './xds-news-highlights.component.html',
  styleUrls: ['./xds-news-highlights.component.css']
})
export class XdsNewsHighlightsComponent implements OnInit {

  newsArr = Array();
  constructor(private http: HttpClient) { }
  noAuthHeader = { headers: new HttpHeaders({
    'Content-Type':'application/json', 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS'
  })};
  getNews(){
    return this.http.get('http://141.99.126.56:3000/getnews',this.noAuthHeader);
  }

  ngOnInit(): void {

    this.getNews().subscribe(
      res => {
        console.log(res);    
        for (const key in res) {
          console.log(key)
    
        }
      
      },
      err => {
        console.log(err);
      }
     )
  
    

    //this.newsArr = await NewsDatServerFunctions.getNewsData("/getnews");
  

    var main = document.getElementById("main") as HTMLDivElement;
    for (let i = 0; i < this.newsArr.length; i+=3)
    {
      var rDiv = document.createElement("div");
      rDiv.setAttribute("class","row");
      main.appendChild(rDiv); 
      for (let j = 0; j < 3; j++) {
        var cDiv = document.createElement("div");
        cDiv.setAttribute("class","card xdr-card-style");
        cDiv.style.width = "31%";
        cDiv.style.margin = "10px";
        //cDiv.setAttribute("id","xdr-card");
        //main.appendChild(cDiv); 
        var Img = document.createElement("img");
        Img.setAttribute("src",this.newsArr[i+j].imglink);
        Img.setAttribute("class", "card-img-top");
        Img.setAttribute("alt", "Card image cap");

        cDiv.appendChild(Img); 
        
        var bDiv = document.createElement("div");
        bDiv.setAttribute("class", "card-body");
        var newHeading2 = document.createElement("h5");
        newHeading2.setAttribute("class", "card-title");
        newHeading2.innerHTML = this.newsArr[i+j].title;
        bDiv.appendChild(newHeading2); 

        var newText = document.createElement("p");
        newText.setAttribute("class", "card-text");
        newText.innerHTML = this.newsArr[i+j].text;
        bDiv.appendChild(newText);

        var newLink = document.createElement("a");
        newLink.setAttribute("href", "#" );
        //newLink.setAttribute("class", "btn btn-primary" );
        newLink.innerHTML = "read more";
        bDiv.appendChild(newLink); 
        cDiv.appendChild(bDiv); 
        
        cDiv.appendChild(bDiv); 
        rDiv.appendChild(cDiv);       
      }
    }
    
  }

  



}
