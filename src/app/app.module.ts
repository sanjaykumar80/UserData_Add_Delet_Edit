import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AddUserdataComponent } from './add-userdata/add-userdata.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { EditUserdataComponent } from './edit-userdata/edit-userdata.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DeleteUserdataComponent } from './delete-userdata/delete-userdata.component';





@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AddUserdataComponent,
    EditUserdataComponent,
    DeleteUserdataComponent,
    
  ],
  imports: [
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
