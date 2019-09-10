import { Component, OnInit } from '@angular/core';
import { MsgserviceService } from "../msgservice.service";
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {  name:'', 
            email:'',
            mobile:null, 
            role:'',
            username: '',
            password: ''};

  constructor(private ms: MsgserviceService, private router: Router) { }

  ngOnInit() {
  }
  signUp(){
    
          this.ms.register(this.user).subscribe(data =>{
            if(data)
            {
              console.log("user already exists")
            }
            else
            this.router.navigateByUrl("");
          });
         
  }
}
