import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NoteService } from '../note-service.service';
import { list } from '../list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnChanges {

  @ViewChild('checkref') check : ElementRef;


  constructor(private service: NoteService){}
  time : Date = new Date();
  array : list[] = [];


  ngOnInit(): void {
    this.array = this.service.getNote();

    
  }

  ngOnChanges(): void {
    
  }

  

  

}
