import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MhButtonComponent } from './mh-button/mh-button.component';
import { MhCardComponent } from './mh-card/mh-card.component';

@NgModule({
  declarations: [MhButtonComponent, MhCardComponent],
  imports: [CommonModule],
  exports: [MhButtonComponent, MhCardComponent],
})
export class SharedModule {}
