import { Component, OnInit } from '@angular/core';
import {MsgserviceService} from '../msgservice.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
authors:any;
  constructor(private ms: MsgserviceService) { }

  ngOnInit() {
    this.ms.getAuthors().subscribe(data=>{
      
      this.authors = data;
    })
  }

}
