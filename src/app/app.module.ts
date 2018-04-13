import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SuggestionService } from './suggestion.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './suggestion/modal/modal.component';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SuggestionComponent,
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ModalModule.forRoot()
  ],
  providers: [SuggestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
