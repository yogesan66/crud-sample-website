import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private service :TransferDataService,
  ){}


  ngOnInit(): void {
  this.login = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })

  //  let user:any=[]
  


  }
  hideRequiredControl = false
   login :FormGroup |any



  get email(){
   return  this.login.get('email')
  }
  get password(){
    return  this.login.get('password')
   }

  ons(){
    this.service.getSignUpData().subscribe((res) =>{
      let data :any =[]
      data= res
      console.log('data',data)
       const user = data.find((a:any)=>{
       return a.email === this.login.value.email 
       &&
        a.password === this.login.value.password
       
      })

      console.log(user)
      if(user){
        alert('you are logined in successfully');
        this.router.navigate(['home'])
      }
      else{
        alert('user not found')
      }
    })
  }
  // register(){
  //   this.router.navigate(['register'])
  // }

}
