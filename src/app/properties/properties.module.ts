import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertiesComponent } from './properties.component';

@NgModule({
  declarations: [PropertiesComponent, PropertyCardComponent],
  imports: [CommonModule],
})
export class PropertiesModule {}
