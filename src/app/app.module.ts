import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { TestService } from './test.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { TodosComponent } from './todos/todos.component';
import { SlaiderComponent } from './slaider/slaider.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodosComponent,
    SlaiderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
  ],
  providers: [TestService, ],
  bootstrap: [AppComponent]

})
export class AppModule { }
