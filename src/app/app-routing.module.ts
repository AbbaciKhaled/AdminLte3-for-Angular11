import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './layouts/statistics/statistics.component';
import { MainComponent } from './shared/main/main.component';

const routes: Routes = [
  {
    path: "", component: MainComponent,
    children: [
      { path: "", component: StatisticsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
