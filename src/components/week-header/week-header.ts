import { Component } from '@angular/core';
import { Broadcaster } from '../../services/broadcaster.service';
import { Events } from '../../services/events';
import { Week } from '../../week';
import { WeekService } from '../../services/week.service';

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


  currentWeekString: string = "";
  currentYear: string = "";
  currentDate: Date;
  

  constructor(private broadcaster: Broadcaster, private weekService : WeekService) {
    this.currentDate = this.weekService.getToday();
    this.setCurrentWeek();
  }

  setCurrentWeek()
  {
    let week : Week = this.weekService.getWeek(this.currentDate);
    this.currentWeekString =  week.start.getDate() + "/" +
                      (week.start.getMonth() + 1) + " -- " +
                      week.end.getDate() + "/" +
                      (week.end.getMonth() + 1);
    this.currentYear = this.currentDate.getFullYear().toString(); 
    this.broadcaster.broadcast(Events.WEEK_CHANGED, week);
  }

  prevWeek()
  {
    this.currentDate.setDate(this.currentDate.getDate() - 7);
    this.setCurrentWeek();
  }

  nextWeek()
  {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.setCurrentWeek();
  }
}
