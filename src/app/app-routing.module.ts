import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { MovieDetailsModule } from './modules/movie-details/movie-details.module';
import { MovieDetailsPageComponent } from './modules/movie-details/pages/movie-details-page/movie-details-page.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent,
    loadChildren:() => {return HomeModule;} 
  },
  {
    path:'movie-details/:id',
    component: MovieDetailsPageComponent,
    loadChildren:() => {return MovieDetailsModule;} 
  },
  {  path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
