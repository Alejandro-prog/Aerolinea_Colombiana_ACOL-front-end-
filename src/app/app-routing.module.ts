import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Importamos el primer componente que acabamos de creear
import { AdminComponent } from './admin/admin.component'; //Importamos el segundo componente que creamos 

const routes: Routes = [
  {path: 'home', component: HomeComponent}, //Agregamos las rutas, la primera ruta -home
  {path: 'admin', component: AdminComponent}, // Segunda ruta, -admin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
