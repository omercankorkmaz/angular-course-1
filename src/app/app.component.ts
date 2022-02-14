import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // structural directives -> *

    courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;

    // @ViewChild(HighlightedDirective)
    // highlighter: HighlightedDirective;

    @ViewChild(CourseCardComponent, { read: HighlightedDirective })
    highlighter: HighlightedDirective;
  

    constructor() {

    }

    ngAfterViewInit() {

    }

    onCourseSelected(course:Course) {

    }

    onToggle(event) {
        console.log(event);
        console.log(this.highlighter);
    }

}
