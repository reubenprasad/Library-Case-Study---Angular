import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MsgserviceService } from "../msgservice.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { BooksComponent } from '../books/books.component';

const URL = 'https://library--server.herokuapp.com/book/addbook';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ms: MsgserviceService) { }
  book = {
    title:'',
    author:'',
    genre:'',
  };
  image;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'image' });
  ngOnInit() {
    this.uploader.onAfterAddingFile = (image) => { image.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  addBook(){
   
    this.book['image'] = this.image.slice(12);
    this.ms.addNewBook(this.book).subscribe();
   /*  this.router.navigateByUrl("/navigation/book"); */
    window.location.reload();
   
  }

}
