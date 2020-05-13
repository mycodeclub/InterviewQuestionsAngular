import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
@Component({
  selector: 'app-view-all-question',
  templateUrl: './view-all-question.component.html',
  styleUrls: ['./view-all-question.component.scss']
})

export class ViewAllQuestionComponent implements OnInit {

  brews: Object;
  constructor(private http_: HttpService) { }

  ngOnInit(): void {
    this.http_.GetAllQuestions().subscribe(data => {
      this.brews = data;
      console.log(data);

    });
  }

}
