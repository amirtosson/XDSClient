import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-e-learning-landing-page',
  templateUrl: './e-learning-landing-page.component.html',
  styleUrls: ['./e-learning-landing-page.component.css']
})
export class ELearningLandingPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  
  }

}
