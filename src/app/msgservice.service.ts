import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsgserviceService {

  constructor(private http: HttpClient) { }

  lg(un,pw){
    return this.http.post("https://library--server.herokuapp.com/user/login", {username:un, password:pw});
  }

  getBooks(){
    return this.http.get("https://library--server.herokuapp.com/book");
  }

  getAuthors(){
    return this.http.get("https://library--server.herokuapp.com/auth");
  }

  getSb(bid){
    return this.http.get("https://library--server.herokuapp.com/book/sp/"+bid);
  }

  getSa(aid){
    return this.http.get("https://library--server.herokuapp.com/auth/sa/"+aid);
  }

  addNewBook(book){
    return this.http.post("https://library--server.herokuapp.com/book/addbook/", book)
  }

  deleteBook(id){
    return this.http.get("https://library--server.herokuapp.com/book/deletebook/" + id);
  }

  editBook(data){
    return this.http.post("https://library--server.herokuapp.com/book/editbook/", data)
  }

  register(user){
    return this.http.post("https://library--server.herokuapp.com/user/signup", user)
  }
}
