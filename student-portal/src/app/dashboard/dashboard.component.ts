import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor( private router:Router) { }
  message: string = "Hola Mundo!";
  subs=["Science","English","Geography","History","Maths","Biology"]
  ngOnInit() {
    
  }
  sendMessage(i){
 
    this.router.navigate(['/questions'],{queryParams:{
      "data":i
    }})
    console.log("sent")
  }

}
