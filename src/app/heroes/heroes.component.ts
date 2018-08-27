import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  students : Student[] = [ { name: 'Mr. Nice',id: 11  },
  {  name: 'Narco',id: 12 },
  { name: 'Bombasto',id: 14 },
  {  name: 'Celeritas',id: 14 },
  {  name: 'Magneta',id: 15 }
  ];

  name: String;
  msg: string;
  lastchar : string;
  image:any;
  showName:boolean;
  salary = 2000;
  source='/pictures/smiley.jpg';
  constructor() { }

  ngOnInit() {
  }
  selectStudent(Index){

  }
  switchViews(){
    this.showName= !this.showName;
  }
  getName(){
  return(this.name);
  }

  onClick(nameData : string, event : any){//"any" datatype dont known means we can give here
    this.msg = nameData + 'Submitted successfully' ;//nameData will have the properties of nameTag
    //debugger;
    return (this.source);
  }
  onClick1(){
    this.image = "/pictures/smiley.jpg";
  }
  //onKey(event: any) {  
   // this.values = event.key;
    //debugger;
 // }
/*  getValue(){
    //this.lastchar=this.values[this.values.length-1];
    //return(this.lastchar);
    if (this.values ==='Enter') {
      return('Thank you for pressing enter');
    } else if(this.values != 'Enter') {
      return(this.values+" is clicked");      
    }

  }
*/}
