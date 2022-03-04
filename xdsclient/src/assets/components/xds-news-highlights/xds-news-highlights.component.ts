import { Component, OnInit, OnDestroy  } from '@angular/core';
import {NewsDatServerFunctions} from "../../../app/servercommunications/news-data-server-function";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {from} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { style } from '@angular/animations';

@Component({
  selector: 'app-xds-news-highlights',
  templateUrl: './xds-news-highlights.component.html',
  styleUrls: ['./xds-news-highlights.component.css']
})
export class XdsNewsHighlightsComponent implements OnInit{
  constructor() { }

   ngOnInit():void {
    NewsDatServerFunctions.GetNews()
    .then
    (
      news => 
      {
        const iterator = news.values();
        var main = document.getElementById("main") as HTMLDivElement;
 
        for (const value of iterator) 
        {     
          var rDiv = document.createElement("div");  
  
          rDiv.setAttribute("class","news-card");
          var css = '.news-card:hover { transform: scale(1.1);}'+
          ' .news-card {background-color: #fff; border: 1px solid rgb(0, 0, 0); '
          +'min-height: 14em; width: 23em;overflow: hidden; border-radius: 10px; margin: 20px;transition: 0.4s ease; }';
          var style = document.createElement('style');
          
  
          style.appendChild(document.createTextNode(css));
         
          
          document.getElementsByTagName('head')[0].appendChild(style);
          main.appendChild(rDiv);
          var cDiv = document.createElement("div");
          cDiv.setAttribute("class","news-img");
          
          var Img = document.createElement("img");
          Img.setAttribute("src",value['imglink']);
          Img.style.width = "100%"
          cDiv.appendChild(Img); 
          var bDiv = document.createElement("div");
          bDiv.style.padding = "1em"
          bDiv.setAttribute("class", "news-info");
          var newHeading2 = document.createElement("h5");
          //newHeading2.setAttribute("class", "news-title");
          newHeading2.innerHTML = value['title'];
          bDiv.appendChild(newHeading2); 

          var newText = document.createElement("p");
          //newText.setAttribute("class", "card-text");
          newText.innerHTML = value['text'];
          bDiv.appendChild(newText);

          var newLink = document.createElement("a");
          newLink.setAttribute("href", "#" );
          //newLink.setAttribute("class", "btn btn-primary" );
          newLink.innerHTML = "read more";
          rDiv.appendChild(cDiv);  
          bDiv.appendChild(newLink); 
          rDiv.appendChild(bDiv); 
          
          //rDiv.appendChild(bDiv); 
         
               
        }
      }
    );
  }
}
