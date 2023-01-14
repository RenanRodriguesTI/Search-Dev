import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { ResultsComponent } from '@pages/results/results.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomeComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'results',
    component:ResultsComponent,
    loadChildren: () => import("./pages/results/results.module").then((m) => m.ResultsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
