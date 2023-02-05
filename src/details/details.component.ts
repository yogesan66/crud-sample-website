import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferDataService } from 'src/services/transfer-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(
    private services:TransferDataService,
    private router:Router,
    private route:ActivatedRoute,
  ){}
  ngOnInit(): void {
    
    this.services.getRegisteredData().subscribe((res)=>{
      this.list = res
    })
  }

  list :any =[]

  view(){
    // this.services.getRegisteredData().subscribe((res)=>{
    //   this.list = res
    // })
  }
  edit(id:any){
   this.router.navigate(['/home/edit'])
   this.services.id = id
   console.log(id)

      
  }
  delete(id:any){
    this.services.DeleteRegisteredData(id).subscribe((res)=>{
      // this.view()
      this.services.getRegisteredData().subscribe((res)=>{
        this.list = res
      })
    })
   
  }

}
