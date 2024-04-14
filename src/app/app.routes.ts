import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:"home" , loadComponent: ()=> import('./app.component')
    .then(mod => mod.AppComponent)
  }
];
