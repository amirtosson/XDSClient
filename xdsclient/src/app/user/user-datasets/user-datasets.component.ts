import { Component, OnInit } from '@angular/core';
import { UserDataServerFunctions } from "../../servercommunications/user-data-server-functions";

@Component({
  selector: 'app-user-datasets',
  templateUrl: './user-datasets.component.html',
  styleUrls: ['./user-datasets.component.css']
})
export class UserDatasetsComponent implements OnInit {

  constructor() { }
  filesArr = Array();
  ngOnInit(): void {
    UserDataServerFunctions.UserDatasets()
    .then
    (
      res => 
      {
        const iterator = res.values();
        for (const value of iterator) {  
          console.log(value);
          this.filesArr.push(value);
        }
        
      }
    );
  }  
}
