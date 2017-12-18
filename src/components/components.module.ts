import { NgModule } from '@angular/core';
import { WeekHeaderComponent } from './week-header/week-header';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { WeekMenuComponent } from './week-menu/week-menu';

@NgModule({
	declarations: [
		WeekHeaderComponent,
		WeekMenuComponent
	],
	imports: [
		CommonModule,
		IonicModule.forRoot(WeekHeaderComponent),
		IonicModule.forRoot(WeekMenuComponent)
	],
	exports: [
		WeekHeaderComponent,
    	WeekMenuComponent]
})
export class ComponentsModule {}
