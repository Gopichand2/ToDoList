import { Injectable } from '@angular/core';
import { list } from './list.model';

@Injectable({
  providedIn: 'root'

})

// class Lister{
//   constructor(public title: string, description: string,time : string){};
// }
export class NoteService {

  

 

  // Title : string;
  // Description: string;
  // Time : Time;

 time : string = new Date().toString().slice(0,25);

  ListAny : list[]= [new list("My First Note", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   this.time, false)];



  
timed : string = '';
  getNote(){
    return this.ListAny;
  }

  addNote(title : string, description: string){
    // this.Title = title;
    // this.Time = time;
    // this.Description = description;

    // this.ListAny.push(title);
    // this.ListAny.push(description);
      this.timed  = new Date().toString().slice(0,25);;
    // this.ListAny.push(this.timed);

    this.ListAny.push(new list(title, description, this.timed, false ));
    
    
    // this.ListAny.push(time);
    // console.log(this.List);
    // this.ListAny = [new list("gopi","hof", this.timed)];
  }

  constructor() { }
}
