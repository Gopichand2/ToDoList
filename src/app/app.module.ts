import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { HomeComponent } from './home/home.component';
import { NoteService } from './note-service.service';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

const routes : Routes =[
  { path : '', redirectTo :'/Home', pathMatch : 'full'},
  { path : 'Home', component : HomeComponent},
  { path : 'Add', component : AddNoteComponent},
  { path : 'Delete', component : DeleteNoteComponent},
  { path : 'Edit', component : EditNoteComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    DeleteNoteComponent,
    EditNoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
