import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {

  constructor(private router:Router){}

  login(){
    this.router.navigate(['/login'])

  }
  signup(){
    this.router.navigate(['signup'])

  }

  admin(){
    this.router.navigate(['admin-login'])
  }
}
