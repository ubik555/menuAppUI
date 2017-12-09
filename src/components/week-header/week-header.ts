import { Component } from '@angular/core';


/**
 * Generated class for the WeekHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'week-header',
  templateUrl: 'week-header.html'
})
export class WeekHeaderComponent {

  currentWeek: string = "";
  currentDate: Date;
  

  constructor() {
    this.currentDate = new Date();
    this.setCurrentWeek();
    
  }

  setCurrentWeek()
  {
    let monday: Date = new Date();
    let sunday: Date = new Date();
    console.log("Current: " +  this.currentDate);
    monday.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1);
    console.log("Monday: " +  monday);
    sunday.setDate(monday.getDate() + 6);
    this.currentWeek =  monday.getDate() + "/" +
                      sunday.getMonth() + " -- " +
                      sunday.getDate() + "/" +
                      sunday.getMonth()
  }

  prevWeek()
  {
    console.log("prev ");
    
    this.currentDate.setDate(this.currentDate.getDate() - 7);
    this.setCurrentWeek();
  }

  nextWeek()
  {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.setCurrentWeek();
  }
}
