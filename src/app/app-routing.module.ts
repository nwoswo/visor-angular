import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { BuscarFileComponent } from './components/buscarFile/buscarFile.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  
      
  {
    path: 'app', component: BodyComponent,
    children: [
      {
        path: '', component: BuscarFileComponent
      },
    ],
  },

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
