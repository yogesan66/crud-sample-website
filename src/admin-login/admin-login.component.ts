import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private service :TransferDataService,
  ){}


  ngOnInit(): void {
  this.admin = this.formBuilder.group({
    password:['',[Validators.required,Validators.minLength(4)]]
  })
  }
  hideRequiredControl = false
   admin :FormGroup |any

  get password(){
    return  this.admin.get('password')
   }

  ons(){
    let admins :any =[]   
    let admin_data :any=[]
    this.service.getAdminData().subscribe((res)=>{
      admin_data = res
      console.log('admin_data',admin_data)
      admins = admin_data.find((a:any)=>{
       return  a.password === this.admin.value.password
      })
      if(admins){
        alert('you are successfully logged in')
        this.router.navigate(['admin'])
      }
      else{
        alert('you are not an admin')
      }
      console.log('admin',admins)

    })

     
  }

}
