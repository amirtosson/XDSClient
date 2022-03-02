import { Component, OnInit } from '@angular/core';
import { UserDataServerFunctions } from "../../servercommunications/user-data-server-functions";

@Component({
  selector: 'app-user-recent-activities',
  templateUrl: './user-recent-activities.component.html',
  styleUrls: ['./user-recent-activities.component.css']
})
export class UserRecentActivitiesComponent implements OnInit {

  constructor() { }
  userId = "";
  ngOnInit(): void {
    UserDataServerFunctions.UserActivities()
    .then
    (
      res => 
      {
        const iterator = res.values();
        for (const value of iterator) {  
          this.userId = this.userId + value["act_type"] + "\n";
        }
        
      }
    );
  }

}
