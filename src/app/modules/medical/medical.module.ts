import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedicalComponent} from './medical.component';
import {MedicalRoutingModule} from './medical-routing.module';

@NgModule({
  imports: [CommonModule, MedicalRoutingModule],
  declarations: [MedicalComponent],
})
export class MedicalModule {}
