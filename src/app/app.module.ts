import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdGridListModule, MdCardModule, MdSnackBarModule, MdIconModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './grid/grid.component';
import { GriditemComponent } from './griditem/griditem.component';
import { HttpModule } from '@angular/http';
import { TruncatePipe } from './truncate.pipe';
import { SearchPipe } from './grid/search.pipe';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DashboardComponent,
    GridComponent,
    GriditemComponent,
    TruncatePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdCardModule,
    MdSnackBarModule,
    MdIconModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
