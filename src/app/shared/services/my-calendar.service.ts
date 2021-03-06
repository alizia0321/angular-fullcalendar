import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Constants } from "./constants";

@Injectable()

export class MyCalendarEvent {

    //@ calendar object
    public calendarObject(_this) {

        let _ths = this;
        return {
            editable: true,
            schedulerLicenseKey: Constants.SCHEDULER_LICENSE_KEY,
            header: _ths.getHeader(),
            height: 640,
            views: _ths.getViews(),
            events(start, end, timezone, callback) {
                callback(_ths.getEvents(_this.filterEvn));
            },            
            viewRender(view) {
                _this.calendarTitle = view.title.replace(/undefined/g, '');
            },
            eventClick(calEvent, jsEvent, view) {
                _this.eventClick(calEvent);
            },
            eventResize(event, delta, revertFunc) {
                _this.eventResize(event, '')
            },
            eventDrop(event, delta, revertFunc) {
                _this.eventDrop(event);
            },
            dayClick(date, jsEvent, view) {
                _this.addEvent(date);
            }            
        }
    }

    public getEvents(filter) {

        //@ fetch data from localstorage
        //@ In real scenario this will come from API        
        let eventData = JSON.parse(localStorage.getItem('eventData'));
        eventData.forEach((o, i) => {
            o.color = this.eventColor(o.type)
            o.start = new Date(o.start);
            o.end = new Date(o.end);
        });

        //@ filter events
        if (filter) {
            let regEx = new RegExp(filter, 'i');
            eventData = eventData.filter(r =>  r.title.match(regEx));
        }        
        return eventData;
    }

    //@ common method to get current date
    public newDate () {
        let dateObj = new Date();
        return dateObj;
    }

    public eventColor(type) {
        let color = type == 'Followup' ? '#5FA4DC' : type == 'Task' ? '#00BD9B' : type == 'Event' ? '#FCC938' : '';                     
        return color;
    }

    //@ header for calendar 
    //@ we have added custom header 
    //@ so passing blank empty
    public getHeader() {
        let data = {
                left: '',
                center: '',
                right: ''
              };
        return data;
    }

    public getViews() {
        //@ customize views        
        let data = {
              month: {
                displayEventTime: false
              }
      };
      return data;
    }    

    public saveLocalStorage(){

        //@ save events data
        //@ In real scenario this will come from API  

        let eventData = localStorage.getItem('eventData');
        if (!eventData) {
            localStorage.setItem('eventData', JSON.stringify(this.localData()));        
        }
    }

    private localData() {

        //@ save events data
        //@ In real scenario this will come from API         
        return [{
                id: '1',
                start: this.newDate().setMinutes(this.newDate().getMinutes()),
                end: this.newDate().setMinutes(this.newDate().getMinutes()+700),
                title: 'event 1'
            },
            {
                id: '2',
                start: this.newDate().setMinutes(this.newDate().getMinutes()+120),
                end: this.newDate().setMinutes(this.newDate().getMinutes()+600),
                title: 'event 2'
            },
            {
                id: '3',
                start: this.newDate().setMinutes(this.newDate().getMinutes()+10),
                end: this.newDate().setMinutes(this.newDate().getMinutes()+500),
                title: 'event 3'
            },
            {
                id: '4',
                start: this.newDate().setMinutes(this.newDate().getMinutes()+10),
                end: this.newDate().setMinutes(this.newDate().getMinutes()+200),
                title: 'event 4'
            },
            {
                id: '5',
                start: this.newDate().setMinutes(this.newDate().getMinutes()+10),
                end: this.newDate().setMinutes(this.newDate().getMinutes()+200),
                title: 'event 4'
            },
            {
                id: '6',
                start: this.newDate().getTime(),
                end: this.newDate().setMinutes(this.newDate().getMinutes()+90),
                title: 'Today Event'
            }];        
    }
};
