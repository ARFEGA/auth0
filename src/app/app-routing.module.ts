import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../../miscelaneos/src/app/components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'prices', component: PricesComponent},
  {path : 'protected', component: ProtectedComponent},
  {
    path : 'datauser',
    component: UserDataComponent,
    canActivate: [AuthGuard]
  },
  {path: '**' , pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
