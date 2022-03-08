import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardDataServerFunctions } from "../../../../app/servercommunications/dashboard-data-server-functions";

@Component({
  selector: 'app-add-new-dataset-dashboard',
  templateUrl: './add-new-dataset-dashboard.component.html',
  styleUrls: ['./add-new-dataset-dashboard.component.css']
})
export class AddNewDatasetDashboardComponent implements OnInit {
  file:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
 
  }

  selectFile($event: { target: any; }) {
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      this.file = file;
    }
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post<any>('http://141.99.126.56:3000/uploadfile', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    /**
    var loggedID = localStorage.getItem('userID')
    DashboardDataServerFunctions.UploadDataset( Number(loggedID), this.file)
    .then(
      res => 
      {
        if (res.status == 200) {
          console.log("Uploaded")
        } 
        else 
        {
          console.log("Not found")
        }
        
      }
    ) */
  }
}
