import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name:any;
  errors:any;
  constructor(private _httpService:HttpService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this.name = {name:""};
  }

  addAuthor(){
    // console.log(this.name);
    return this._httpService.serviceAddAuthor(this.name).subscribe(data => {
      console.log(data);
      if (data['errors']) {
        this.errors = data['errors']
      } else {

        this.name = {name:""};
        this._router.navigate(['/']);
      }
    })
  }

}
