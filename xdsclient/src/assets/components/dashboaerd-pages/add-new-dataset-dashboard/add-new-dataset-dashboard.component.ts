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
  file_reconstructed_name = '';
  constructor(private http: HttpClient, ) { }

  ngOnInit(): void {
 
  }

  UpdateFileName(name_part:string){
      this.file_reconstructed_name = this.file_reconstructed_name + name_part+"_"  
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
    let sec_eles = document.getElementsByTagName("section");
    for (var i = 0; i < sec_eles.length; i++) {
      sec_eles[i].classList.add("disabled");
    }
    var el2 = document.getElementById("servicesl") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});
  }

  startDetails(){
    var el2 = document.getElementById("data_structure") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});
  }

  oneDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("1d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.file_reconstructed_name ="1d_"
  }
  twoDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("2d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.file_reconstructed_name ="2d_"
  }
  threeDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("3d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.file_reconstructed_name ="3d_"
  }

  DataStructureDetailsIsReady(){
    var el2 = document.getElementById("details_section") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});

  }

  DataDetailsAreReady(){
    var el2 = document.getElementById("upload-section") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'})
  }

  onSubmit(){

    let id:string
    id = sessionStorage.getItem("userID") as string 
    this.UpdateFileName( id)
    var method =  document.getElementById("methods") as HTMLSelectElement;
    this.UpdateFileName(method.value)
    console.log(method.value)
    var form =  document.getElementById("details-form") as HTMLDivElement;
    var details = form.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>;
    for (let index = 0; index < details.length-1; index++) {
      const element = details[index];
      this.UpdateFileName(element.value)
    }
    console.log(this.file_reconstructed_name)
    const formData = new FormData();
    formData.append('file', this.file, this.file_reconstructed_name);
     this.http.post<any>('http://141.99.126.56:3000/uploadfile',formData, {reportProgress: true})
     .subscribe(res => {
        if (res.originalname == this.file_reconstructed_name)
        {
          var input =  document.getElementById("upload-file") as HTMLInputElement;
          input.value = ''
          window.alert("Your file has been uploaded uploaded with the name "+ this.file_reconstructed_name);
          this.allCardsToDefault()
        }
     });

  }
}
