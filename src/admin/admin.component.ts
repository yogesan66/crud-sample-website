import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  constructor(
    private router:Router,
  ){}
  ngOnInit(): void {
    this.router.navigate(['/admin/userDetails'])

  }

  click(){
    this.router.navigate(['/home'])
  }
  homec(){

  }

  pass(){
    this.router.navigate(['/admin/admin-pass'])
  }

  sign(){
    this.router.navigate(['/admin/userDetails'])
  }

}
