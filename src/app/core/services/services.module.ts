import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapperService } from './mapper.service';
import { RenderDocxService } from './render-docx.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MapperService,
    RenderDocxService
  ]
})
export class ServicesModule { }
