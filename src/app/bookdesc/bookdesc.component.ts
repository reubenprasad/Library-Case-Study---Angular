import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MsgserviceService } from "../msgservice.service";
@Component({
  selector: 'app-bookdesc',
  templateUrl: './bookdesc.component.html',
  styleUrls: ['./bookdesc.component.css']
})
export class BookdescComponent implements OnInit {
  bid;
  book;
  constructor(private router: ActivatedRoute, private ms: MsgserviceService) { }

  ngOnInit() {

    this.bid = this.router.snapshot.paramMap.get('id');
    
    this.ms.getSb(this.bid).subscribe(data=>{
      console.log(data);
      this.book = data[0];
    })

  }

}
