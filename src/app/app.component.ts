import { Component, OnInit } from '@angular/core';
import { NoteService } from './note-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ToDoList1';
  DELETE1 = "Delete";

  constructor(private service: NoteService){}

  ngOnInit(): void {
  }
  
  DeleteFunction(){


    
    
  }


}
