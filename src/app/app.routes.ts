import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'hotels', component: HotelListComponent},
  {path: 'hotels/:id', component: HotelDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'} // c'est ici que je mets la page 404
];
