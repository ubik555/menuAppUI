import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Week } from '../../week';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentWeek : Week;

  constructor(public navCtrl: NavController) {

  }

  saveData(week)
  {
      this.currentWeek = week;
      console.log("week: " + week.start.toDateString() + " to " + week.end.toDateString());
  }
}
