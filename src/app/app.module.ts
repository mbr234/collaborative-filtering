import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookComponent } from './components/book/book.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookstoreComponent } from './views/bookstore/bookstore.component';
import { MatrixComponent } from './views/matrix/matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    DashboardComponent,
    BookstoreComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
