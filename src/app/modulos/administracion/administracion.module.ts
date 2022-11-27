import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListarTipoInmuebleComponent } from './tipoInmueble/listar-tipo-inmueble/listar-tipo-inmueble.component'


@NgModule({
  declarations: [
    ListarTipoInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
