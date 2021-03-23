import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MhButtonComponent } from './mh-button/mh-button.component';
import { MhCardComponent } from './mh-card/mh-card.component';
import { MhSelectComponent } from './mh-select/mh-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MhButtonComponent, MhCardComponent, MhSelectComponent],
  imports: [CommonModule, FormsModule],
  exports: [MhButtonComponent, MhCardComponent, MhSelectComponent],
})
export class SharedModule {}
