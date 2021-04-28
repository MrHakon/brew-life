import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'beerlist', pathMatch: 'full'},
  {path: 'beerlist', component: BeerListComponent},
  {path: 'beerdetails/:id', component: BeerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
