import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name:any;
  constructor(private _httpService:HttpService,
    private _route:ActivatedRoute,
    private _router:Router) {
      
     }

  ngOnInit() {
    
    this._route.params.subscribe((params:Params) => {
      console.log(params.id);
      this.name = this.getAuthor(params.id)
    })
    
  }
  getAuthor(id){
    this._httpService.serviceGetAuthor(id).subscribe(data => {
      this.name = data;
    })

    }
    updateAuthor(author){
      this._httpService.serviceUpdateAuthor(author).subscribe(data => {
        console.log("Edit compononet",data);
        this._router.navigate(['/']);
      })
    }
}
  

