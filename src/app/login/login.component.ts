import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { MsgserviceService } from '../msgservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private ms: MsgserviceService) { }
  un;
  pw;
  ngOnInit() {
  }

  login(){
    
    this.ms.lg(this.un, this.pw).subscribe(data=>{
      if (data['user'] == true) this.router.navigateByUrl("/navigation/book");
      else {
       
        this.router.navigateByUrl("");
      } 
    })
  }

}
