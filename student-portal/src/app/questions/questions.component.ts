import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { ExamService } from '../exam.service'
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  ques: any;
 
  ansArray = [];
  start = 0;
  end = 4;
  btnName: string = "Next";
  sub;
  constructor(private exam: ExamService,private route: ActivatedRoute,private router:Router) { }
  message:string;


  ngOnInit() {
    this.route.queryParams.subscribe( data => {
      console.log(data.data);
      this.sub=data.data
    });
    if(this.sub==1){
      this.message="Science"
    }
    if(this.sub==2){
      this.message="English"
    }
    if(this.sub==3){
      this.message="Geography"
    }
    if(this.sub==4){
      this.message="History"
    }
    if(this.sub==5){
      this.message="Maths"
    }
    if(this.sub==6){
      this.message="Biology"
    }
    
    
    console.log(this.sub);
    this.exam.getQues(this.sub);
    this.ques = this.exam.getQues(this.sub);
  
    

  }
  submit() {
    if (this.end == this.ques.length) {
      console.log("end")
     
      this.router.navigate(['/exit'])
    }
    else {
      this.start = this.end;
      this.end = this.end + 4;
      if(this.end == this.ques.length){
        this.btnName = "submit"
      }

    }

  }




}
