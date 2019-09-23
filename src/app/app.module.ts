import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './side-bar/search/search.component';
import { SideBarComponent } from './side-bar/side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SideBarComponent,
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
        
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
