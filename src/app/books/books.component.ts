import { Component, OnInit } from '@angular/core';
import {MsgserviceService} from '../msgservice.service'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;
  constructor(private ms: MsgserviceService) { }

  ngOnInit() {
    this.ms.getBooks().subscribe(data=>{
      
      this.books = data;
    })

  }

}
