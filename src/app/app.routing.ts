import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreComponent } from './views/bookstore/bookstore.component';
import { MatrixComponent } from './views/matrix/matrix.component';

const routes: Routes = [
  { path: '', redirectTo: '/bookstore', pathMatch: 'full' },
  { path: 'bookstore', component: BookstoreComponent },
  { path: 'matrix', component: MatrixComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }