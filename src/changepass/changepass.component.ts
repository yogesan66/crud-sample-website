import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';


@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent {

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private service :TransferDataService,
  ){}


  ngOnInit(): void {
   this.service.getAdminData().subscribe((res)=>{
    this.list = res
    this.pass =this.list[0].password
    console.log(this.pass)
   })

  }
  list:any=[]

  admin = this.formBuilder.group({
    password:['',[Validators.required,Validators.minLength(4)]]
  })

  pass:string= ''
  hideRequiredControl = false

  get password(){
    return  this.admin.get('password')
   }
     // this.service.UpdateAdminData(id,data).subscribe((res)=>{
    //   alert("password changed successfully")
    // })

  ons(){
    let id = 0;
    let data = this.admin.value
       this.service.UpdateAdminData(id,data).subscribe((res)=>{
      alert("password changed successfully")
    })
    console.log('daaaaaaaaaaa',data)


    

}
}