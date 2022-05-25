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

  allCardsToDefault(){
    var eles = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
    for (var i = 0; i < eles.length; i++) {
      eles[i].classList.remove("card_pressed");
    }
  }

  startDetails(){
    var el2 = document.getElementById("details_section") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});
  }

  oneDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("1d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
  }
  twoDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("2d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
  }
  threeDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("3d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
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
