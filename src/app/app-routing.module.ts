import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrochureComponent } from './properties/brochure/brochure.component';
import { GalleryComponent } from './properties/gallery/gallery.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  { path: 'properties', component: PropertiesComponent },
  { path: 'properties/brochure/:id', component: BrochureComponent },
  { path: 'properties/gallery/:id', component: GalleryComponent },
  { path: '**', redirectTo: '/properties', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
