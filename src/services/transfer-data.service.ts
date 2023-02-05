import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  constructor(
    private http:HttpClient,
  ) { }

  id :any;
  getId(){
    return this.id
  }
  postRegisteredData(data:any){
   return this.http.post('http://localhost:4000/registerData',data)
  }

  getRegisteredData(){
    return this.http.get('http://localhost:4000/registerData')
   }

   DeleteRegisteredData(id:any){
    return this.http.delete('http://localhost:4000/registerData/'+id)
   }
   UpdateRegisteredData(id:any,data:any){
    return this.http.put('http://localhost:4000/registerData/'+id,data)
   }


   postSignUpData(data:any){
    return this.http.post('http://localhost:4000/signUpData',data)
   }
 
   getSignUpData(){
     return this.http.get('http://localhost:4000/signUpData')
    }

    deleteSignUpData(id:any){
      return this.http.delete('http://localhost:4000/signUpData/'+id)

    }

    getAdminData(){
      return this.http.get('http://localhost:4000/adminData')

    }

    UpdateAdminData(id:any,data:any){
      return this.http.put('http://localhost:4000/adminData/'+id,data)

    }
 
 
    // DeleteRegisteredData(id:any){
    //  return this.http.delete('http://localhost:2000/registerData/'+id)
    // }
    // UpdateRegisteredData(id:any,data:any){
    //  return this.http.put('http://localhost:2000/registerData/'+id,data)
    // }

}
