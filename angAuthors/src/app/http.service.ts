import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  serviceAddAuthor(author){
    // console.log(author);
    return this._http.post('/authors', author)
  }

  serviceGetAuthors(){
    return this._http.get('/authors');
  }
  serviceGetAuthor(id){
    console.log(id);
    return this._http.get('/authors/' + id);
  }
  serviceUpdateAuthor(author){
    console.log("Service", author);
    return this._http.post('/authors/'+author._id, author);
  }
  serviceDeleteAuthor(author){
    return this._http.delete('/authors/' + author._id, author);
  }
}
