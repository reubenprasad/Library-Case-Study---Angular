import { Component, OnInit } from '@angular/core';
import {MsgserviceService} from '../msgservice.service'
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  books:any;
  constructor(private ms: MsgserviceService) { }

  ngOnInit() {
    this.ms.getBooks().subscribe(data=>{
      
      this.books = data;
    })
  }

  deleteBook(id){
    console.log(id)
    this.ms.deleteBook(id).subscribe(data=>{
      this.books = data;
    })
  }

}
