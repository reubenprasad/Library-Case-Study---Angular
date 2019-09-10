import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MsgserviceService } from "../msgservice.service";

@Component({
  selector: 'app-authdesc',
  templateUrl: './authdesc.component.html',
  styleUrls: ['./authdesc.component.css']
})
export class AuthdescComponent implements OnInit {
  aid;
  author;
  constructor(private router: ActivatedRoute, private ms: MsgserviceService) { }

  ngOnInit() {
    this.aid = this.router.snapshot.paramMap.get('id');
    
    this.ms.getSa(this.aid).subscribe(data=>{
      
      this.author = data;
    })

  }

}
