@Component({
    selector: 'students',
    template: `<h2> {{  getTitle()}} {{  getCurrentDate()}}</h2>`
})
export class StudentsComponent {
    title = "My List of Students";
    getTitle() {
        return this.title;
    }

    today= new Date();
    jstoday = '';
    constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

    getCurrentDate() {
        return this.jstoday;
    }
}

import { Component } from '@angular/core';
import {formatDate } from '@angular/common';

