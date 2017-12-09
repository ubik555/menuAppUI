import { NgModule } from '@angular/core';
import { WeekHeaderComponent } from './week-header/week-header';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';


@NgModule({
	declarations: [WeekHeaderComponent],
	imports: [
		CommonModule,
		IonicModule.forRoot(WeekHeaderComponent)
	],
	exports: [WeekHeaderComponent]
})
export class ComponentsModule {}
