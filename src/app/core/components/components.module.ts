import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FiltrosComponent } from './filtros/filtros.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FiltrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FiltrosComponent
  ]
})
export class ComponentsModule { }
