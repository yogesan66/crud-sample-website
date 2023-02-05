import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/database/service/transfer.service';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private service :TransferDataService,
    private router:Router,
    private formBuilder:FormBuilder,
  ){}


hideRequiredControl = false
  signup = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })

  get email(){
   return  this.signup.get('email')
  }
  get password(){
    return  this.signup.get('password')
   }

  ons(){
    let signUpData = this.signup.value;
    this.service.postSignUpData(signUpData).subscribe((res) =>{
      alert("You are signed up successfully!")
    })
    this.signup.reset()
   this.router.navigate(['login'])
  

}
}