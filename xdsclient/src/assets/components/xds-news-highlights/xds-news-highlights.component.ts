import { Component, OnInit, OnDestroy  } from '@angular/core';
import {NewsDatServerFunctions} from "../../../app/servercommunications/news-data-server-function";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {from} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-xds-news-highlights',
  templateUrl: './xds-news-highlights.component.html',
  styleUrls: ['./xds-news-highlights.component.css']
})
export class XdsNewsHighlightsComponent implements OnInit{
  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    NewsDatServerFunctions.fetchMoviesJSON().then(movies => {
      const iterator = movies.values();
      var main = document.getElementById("main") as HTMLDivElement;
      var divCounter = 1;
      var rDiv = document.createElement("div");
      rDiv.setAttribute("class","row");
      main.appendChild(rDiv);
      for (const value of iterator) {      
        if(divCounter%3 == 0)
        {
          var rDiv = document.createElement("div");
          rDiv.setAttribute("class","row");
          main.appendChild(rDiv);
        }
        var cDiv = document.createElement("div");
        cDiv.setAttribute("class","card xdr-card-style");
        cDiv.style.width = "31%";
        cDiv.style.margin = "10px"; 
        var Img = document.createElement("img");
        Img.setAttribute("src",value['imglink']);
        Img.setAttribute("class", "card-img-top");
        Img.setAttribute("alt", "Card image cap");
        cDiv.appendChild(Img); 
        var bDiv = document.createElement("div");
        bDiv.setAttribute("class", "card-body");
        var newHeading2 = document.createElement("h5");
        newHeading2.setAttribute("class", "card-title");
        newHeading2.innerHTML = value['title'];
        bDiv.appendChild(newHeading2); 

        var newText = document.createElement("p");
        newText.setAttribute("class", "card-text");
        newText.innerHTML = value['text'];
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
      
      
    });
  }
}
