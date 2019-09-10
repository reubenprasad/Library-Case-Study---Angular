import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  nlink = [
    {link:"/navigation/book", title:"Books"}, 
    {link:"/navigation/auth", title:"Authors"}, 
    {link:"/navigation/addbook", title:"Add Books"}, 
    {link:"/navigation/updatebook", title:"Update Books"}, 
    /* {link:"/navigation/logout", title:"Logout"},  */
    
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
