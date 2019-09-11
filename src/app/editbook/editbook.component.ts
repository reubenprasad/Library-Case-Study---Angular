import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MsgserviceService } from "../msgservice.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://library--server.herokuapp.com/book/editbook';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
bid;
book;
/* book = {
  title:'',
  author:'',
  genre:'',
}; */
image;
public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'image' });
  constructor(private router: Router, private route: ActivatedRoute, private ms: MsgserviceService) { }

  ngOnInit() {
    this.bid = this.route.snapshot.paramMap.get('bid');
    this.ms.getSb(this.bid).subscribe(data=>{
      console.log(data);
      this.book = data[0];
    })

    this.uploader.onAfterAddingFile = (image) => { image.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  updateBook(){
    console.log(this.book);
    this.book['image'] = this.image.slice(12);
    this.ms.editBook(this.book).subscribe();    
    this.router.navigateByUrl("/navigation/updatebook");
  }
}
