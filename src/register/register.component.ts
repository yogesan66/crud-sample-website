import { Component } from '@angular/core';
import { FormBuilder ,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private formBuilder:FormBuilder,
    private service:TransferDataService,   
    private router :Router      
    ){}

  register = this.formBuilder.group({
    studentname:['',[Validators.required,Validators.pattern('[a-zA-Z. ]*')]],
    roll:['',[Validators.required]],
    // selected:['',[Validators.required]],
    dept:['',[Validators.required]],
    comp:['',[Validators.required]],


    

  })


ons(){
  // console.log(JSON.stringify(this.register.value));

  console.log(this.register.value)
  let registerFormData = this.register.value
  alert('Your registration is successfully completed')
  this.service.postRegisteredData(registerFormData).subscribe((res)=>{

  })
  this.register.reset();
  this.router.navigate(['/home/details'])
}


  get student(){
   return  this.register.get('studentname')
  }
  get roll(){
    return this.register.get('roll')
  }
  //  get dept(){
  //    return this.register.get('dept')
  //  }

department = ["BSc.Computer Science","BSc.Information Technology",'BSc.Data Analytics'];
com = ["Web Designing","Poster Designing","Coding","Debugging"];

}
