import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
 /*  {path:'', redirectTo:'inicio', pathMatch: 'full'},
  {path:'nosotros', redirectTo:'nosotros', pathMatch: 'full'},
  {path:'contacto', redirectTo:'contacto', pathMatch: 'full'},
  {path:'productos', redirectTo:'productos', pathMatch: 'full'},
 */

  {path:'nosotros', component: NosotrosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'productos', component: ProductosComponent},
  {path:'inicio', component: InicioComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
