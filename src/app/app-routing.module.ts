import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { MobPartsComponent } from './mob-parts/mob-parts.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { ProdOneComponent } from './prod-one/prod-one.component';
import { ProdTwoComponent } from './prod-two/prod-two.component';
import { ProdThreeComponent } from './prod-three/prod-three.component';


const appRoutes : Routes = [
// { path:"ProdOne", component: AppComponent},
{ path:"mobile", component: MobPartsComponent},
{ path:"ProdThree", component: ProdThreeComponent},
// { path:"", component: AppComponent},
 { path: '**', component: ProdThreeComponent },

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
