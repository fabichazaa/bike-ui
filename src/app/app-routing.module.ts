import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';

const routes: Routes = [
{
  path:'home',
  component: HomeComponent
},
{
  path: 'admin/view/:id',
  component: ViewRegistrationComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path:  'gallery',
  component: ImageGalleryComponent
},
{
  path: '**',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
