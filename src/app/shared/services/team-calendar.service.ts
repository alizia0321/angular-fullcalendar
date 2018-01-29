import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class MyTeamCalendarEvent {

    public getTeamEvents(): Observable < any > {
        let eventData = JSON.parse(localStorage.getItem('teamEventData'));
        return eventData;
    }

    public getTeamResourceData(): Observable < any > {
        let eventData = JSON.parse(localStorage.getItem('teamResourceData'));
        return eventData;
    }

    public saveLocalStorage() {

        var dateObj = new Date();
        let teamEventData: any = [{
                id: '1',
                resourceId: 'b',
                start: '2017-12-07T02:00:00',
                end: '2017-12-07T07:00:00',
                title: 'event 1'
            },
            {
                id: '2',
                resourceId: 'c',
                start: '2017-12-07T05:00:00',
                end: '2017-12-07T22:00:00',
                title: 'event 2'
            },
            {
                id: '3',
                resourceId: 'd',
                start: '2017-12-06',
                end: '2017-12-08',
                title: 'event 3'
            },
            {
                id: '4',
                resourceId: 'e',
                start: '2017-12-07T03:00:00',
                end: '2017-12-07T08:00:00',
                title: 'event 4'
            },
            {
                id: '5',
                resourceId: 'f',
                start: '2017-12-07T00:30:00',
                end: '2017-12-07T02:30:00',
                title: 'event 5'
            },
            {
                id: '6',
                resourceId: 'a',
                start: '2017-12-07T00:30:00',
                end: '2017-12-07T02:30:00',
                title: 'event 00'
            }
        ];

        let teamResourceData: any = [{
                id: 'a',
                title: 'Jitendra Rajput'
            },
            {
                id: 'b',
                title: 'Ashish John',
                eventColor: 'green'
            },
            {
                id: 'c',
                title: 'Raj Kumar',
                eventColor: 'orange'
            },
            {
                id: 'd',
                title: 'Ashish Gupta',
                eventColor: '#9C6649'
            },
            {
                id: 'e',
                title: 'Ankit Sharma'
            },
            {
                id: 'f',
                title: 'Sunil Kharbash',
                eventColor: 'red'
            }
        ];

        let eventData = localStorage.getItem('teamEventData');
        let resourcesData = localStorage.getItem('teamResourceData');

        if (!eventData) {
            localStorage.setItem('teamEventData', JSON.stringify(teamEventData));
        }

        if (!resourcesData) {
            localStorage.setItem('teamResourceData', JSON.stringify(teamResourceData));
        }
    }
};