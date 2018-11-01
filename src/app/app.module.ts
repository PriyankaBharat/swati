import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component'
import { MobPartsComponent } from './mob-parts/mob-parts.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { ProdOneComponent } from './prod-one/prod-one.component';
import { ProdTwoComponent } from './prod-two/prod-two.component';
import { ProdThreeComponent } from './prod-three/prod-three.component';
import { AppRoutingModule } from './/app-routing.module';
import { MobDataService } from './mob-parts/mob-data.service';

@NgModule({
	declarations: [ AppComponent, MobPartsComponent, DummyComponentComponent, ProdOneComponent, ProdTwoComponent, ProdThreeComponent ],
	imports : [ BrowserModule, AppRoutingModule, HttpModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule ],
	bootstrap : [ AppComponent ],
	providers: [ MobDataService ],
	exports: [MatButtonModule, MatCheckboxModule]
})
export class AppModule{}
