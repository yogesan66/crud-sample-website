import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  constructor(  
      private service:TransferDataService,
      private router:Router,

    ){}

  ngOnInit(): void {
   this.service.getSignUpData().subscribe((res=>{
    this.list = res
   }))

  }
 list:any=[]
 edit(){

 }

 delete(id:any){
  this.service.deleteSignUpData(id).subscribe((res)=>{
    this.service.getSignUpData().subscribe((res=>{
      this.list = res
     }))
  })
 }
}
