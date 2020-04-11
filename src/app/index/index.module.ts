import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
];
@NgModule({
  declarations: [IndexComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [RouterModule],
})
export class IndexModule {}
