import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.router.navigate(['invitation'],{relativeTo:this.route})

  }

  register(){
    this.router.navigate(['register'],{relativeTo:this.route})
    
  }

  homec(){
    this.router.navigate(['invitation'],{relativeTo:this.route})
  }
  details(){
    this.router.navigate(['details'],{relativeTo:this.route})
  }
}
