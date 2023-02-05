import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(
    private formBuilder:FormBuilder,
    private service:TransferDataService,
    private router:Router         
    ){}
  ngOnInit(): void {
    let lists :any=[]
    // let mini :any=[]
    // let id :any;
    this.service.getRegisteredData().subscribe((res)=>{
     lists = res
     console.log(lists)
     this.id = this.service.getId()
     console.log(this.id);
     this.id2 = this.id - 1
     this.mini = lists[this.id - 1]
     console.log(this.mini )
     this.s_name = this.mini .studentname;
     this.roll_no = this.mini .roll
    this.dept_n  = this.mini .dept
    this.comp_n  =this.mini .comp

    })
  }
  mini :any = []
    id:any;
    id2:any;
    s_name :string =''
    roll_no :string =''
    dept_n :any=[]
    comp_n :any=[]

  edit = this.formBuilder.group({
    studentname:['',[Validators.required,Validators.pattern('[a-zA-Z. ]*')]],
    roll:['',[Validators.required]],
    // selected:['',[Validators.required]],
    dept:['',[Validators.required]],
    comp:['',[Validators.required]],


    

  })


onupdate(){
  // console.log(JSON.stringify(this.register.value));

  // console.log(this.edit.value)
  let editFormData = this.edit.value
  alert('Your registration is successfully updated')
  this.service.UpdateRegisteredData(this.id,editFormData).subscribe((res)=>{

  })

 
  this.edit.reset();
  this.router.navigate(['/home/details'])
}


  get student(){
   return  this.edit.get('studentname')
  }
  get roll(){
    return this.edit.get('roll')
   
  }
  //  get dept(){
  //    return this.register.get('dept')
  //  }

department = ["BSc.Computer Science","BSc.Information Technology",'BSc.Data Analytics'];
com = ["Web Designing","Poster Designing","Coding","Debugging"];


}
