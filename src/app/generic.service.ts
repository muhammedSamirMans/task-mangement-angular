import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(public http:HttpClient) { }
  get(path:string){
    return this.http.get(path)
  }
  post(path:string,body:{}){
   return this.http.post(path,body)
  }

  put(path:string,body:{}){
    return this.http.put(path,body)
   }
   delete(path:string){
    return this.http.delete(path)
   }
}
