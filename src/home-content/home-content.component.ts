import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  constructor(private router:Router,
    private route:ActivatedRoute
    ){

  }

  register(){
    this.router.navigate(['home/register'])
    // this.router.navigate(['register'],{relativeTo:this.route})

  }
  // register(){
  //   this.router.navigate(['register'],{relativeTo:this.route})
    
  // }

}
