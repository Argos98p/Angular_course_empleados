import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'empleados'},
  {path:'empleados', component:ListaEmpleadosComponent},
  {path:'new',component:FormularioComponent},
  {path:'**',redirectTo:'empleados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
