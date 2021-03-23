import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PropertiesComponent } from './properties.component';
import { BrochureComponent } from './brochure/brochure.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [PropertiesComponent, BrochureComponent, GalleryComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
})
export class PropertiesModule {}
