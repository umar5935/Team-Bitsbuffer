import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path: "headercomponent" , component: HeaderComponent},
    {path: "form" , component: FormComponent},
    {path: "gallery" , component: GalleryComponent},


];
