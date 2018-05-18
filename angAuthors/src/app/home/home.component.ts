import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(){
    this._httpService.serviceGetAuthors().subscribe(data => {
      this.authors = data;
    })
  }

  deleteAuthor(author){
    this._httpService.serviceDeleteAuthor(author).subscribe(data=> {
      console.log("homecomp",data);
      this.getAllAuthors();
    })
  }
}
