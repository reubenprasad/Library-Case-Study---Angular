import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsgserviceService {

  constructor(private http: HttpClient) { }

  lg(un,pw){
    return this.http.post("http://localhost:3000/user/login", {username:un, password:pw});
  }

  getBooks(){
    return this.http.get("http://localhost:3000/book");
  }

  getAuthors(){
    return this.http.get("http://localhost:3000/auth");
  }

  getSb(bid){
    return this.http.get("http://localhost:3000/book/sp/"+bid);
  }

  getSa(aid){
    return this.http.get("http://localhost:3000/auth/sa/"+aid);
  }

  addNewBook(book){
    return this.http.post("http://localhost:3000/book/addbook/", book)
  }

  deleteBook(id){
    return this.http.get("http://localhost:3000/book/deletebook/" + id);
  }

  editBook(data){
    return this.http.post("http://localhost:3000/book/editbook/", data)
  }

  register(user){
    return this.http.post("http://localhost:3000/user/signup", user)
  }
}
