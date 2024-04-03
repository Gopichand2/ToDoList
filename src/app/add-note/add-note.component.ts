import { Component, ElementRef, OnInit, ViewChild, HostListener, Host } from '@angular/core';
import { NoteService } from '../note-service.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent implements OnInit {

  @ViewChild('heading', { static: false }) text: ElementRef;
  @ViewChild('description', { static: false }) text1: ElementRef;


  


  onreset() {
    this.text.nativeElement.value = "";
    this.text1.nativeElement.value = "";

  }


  constructor(private service: NoteService, routes : Router) { }

  ngOnInit(): void {


  }


  onSubmit(head: string, desc: string) {
    // const head = this.text.nativeElement.value;
    // const desc = this.text1.nativeElement.value;

    if (!(head === "" && desc === "")) {
      const date = new Date();
      this.service.addNote(head, desc);
      console.log(head);
      console.log(desc);
      console.log(date);
    }

  }

}
