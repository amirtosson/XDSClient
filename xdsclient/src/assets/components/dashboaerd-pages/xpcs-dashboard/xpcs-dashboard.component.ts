import { Component, OnInit } from '@angular/core';
import { OnlineAnalysisServerFunctions } from "../../../../app/servercommunications/online-analysis-server-function";
import { OnlineSoftwareItem } from "../../../../app/objects/online-software-item";
@Component({
  selector: 'app-xpcs-dashboard',
  templateUrl: './xpcs-dashboard.component.html',
  styleUrls: ['./xpcs-dashboard.component.css']
})
export class XpcsDashboardComponent implements OnInit {
  public availableSoftware: OnlineSoftwareItem[] = [];
  constructor() { }
  datasets = [
    { name: "XPCS", value: 10 },
    { name: "GISAX", value: 5},
    { name: "Others", value: 1 }
  ];

  publications = [
    { name: "XPCS", value: 20 },
    { name: "GISAX", value: 15},
    { name: "Others", value: 65 }
  ];
  ngOnInit(): void {
    OnlineAnalysisServerFunctions.GetAvailableSoftware().then
    (
      res =>{
        let t;
        var main = document.getElementById("software-content") as HTMLDivElement;

        for (let index = 0; index < res.software.length; index++) {
          var rDiv = document.createElement("div");  
  
          rDiv.setAttribute("class","software-card");
          rDiv.setAttribute("id",res.software[index].id);
          rDiv.addEventListener("click",function() {
            sessionStorage.setItem("softwareInstance",  res.software[index].name);
            window.open("/onlinesoftware/xpcs/"+ res.software[index].doi, '_blank')
         })


     
          main.appendChild(rDiv);
          var cDiv = document.createElement("div");
          cDiv.setAttribute("class","software-image");
          console.log("t")
          var Img = document.createElement("img");
          Img.setAttribute("src","../../../../assets/Images/"+res.software[index].logo_path);
          Img.style.width = "100%"
          cDiv.appendChild(Img); 

          var bDiv = document.createElement("div");
          bDiv.style.padding = "1em"
          bDiv.setAttribute("class", "software-info");

          var newText = document.createElement("p");
          newText.setAttribute("class", "softwar-title");
          newText.innerHTML = res.software[index].name;
          bDiv.appendChild(newText);


          var newHeading2 = document.createElement("p");
          newHeading2.setAttribute("class", "softwar-category");
          newHeading2.innerHTML = res.software[index].desc;
          bDiv.appendChild(newHeading2); 


          rDiv.appendChild(cDiv);  
          rDiv.appendChild(bDiv); 
          console.log(res.software[index].id)
          var newData = JSON.stringify(res.software)
          t = JSON.parse(newData)

          var css = '.software-card:hover { transform: scale(1.1);}'
          +'.software-card {background-color: #fff; border: 1px solid rgb(0, 0, 0);'
          +'min-height: 14em; width: 15em;overflow: hidden; border-radius: 10px; margin: 20px;transition: 0.4s ease; }'
          +'.software-image img{ width: 100%;height: 150px;}'
          +'.software-card:hover .software-image { opacity: 0.6;}'
          +'.software-card:hover {cursor: pointer; }'
          +'.softwar-title {display: flex;justify-content: space-between;text-transform: uppercase; font-weight: 600; margin-top: 10px;}';
          var style = document.createElement('style');
          
          
          style.appendChild(document.createTextNode(css));
         
          
          document.getElementsByTagName('head')[0].appendChild(style);
          
        }        
      }
    )
  }

}
