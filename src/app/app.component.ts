import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, Injector, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit {

    courses: Course[] = COURSES;

    coursesTotal = this.courses.length;

    @ViewChild(CourseCardComponent, { read: ElementRef })
    cardElementRef: ElementRef;

    @ViewChild(CourseCardComponent)
    cardComponent: CourseCardComponent;

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cardElementRefs: QueryList<ElementRef>;

    @ViewChildren(CourseCardComponent)
    cardComponents: QueryList<CourseCardComponent>;

    bool: boolean;

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private injector: Injector) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Gets invoked whenever the input value gets changed.
    }
    ngOnInit() {
        const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});
        customElements.define('course-title', htmlElement);        
    }
    ngAfterContentInit() {
        this.courses[1].description = 'test';
        this.bool = true;
    }
    ngAfterViewInit(): void {
        // console.log(this.cardElementRef);
        // console.log(this.cardComponent);
        // console.log(this.cardElementRefs);
        // console.log(this.cardComponents);
        // this.courses[1].description = 'test'; // ExpressionChangedAfterItHasBeenCheckedError
        // this.bool = true; // no error

        // this.cardComponents.changes.subscribe(res => {
        //     console.log(res);
        // })
        // this.cardElementRefs.changes.subscribe(res => {
        //     console.log(res);
        // })
    }




    onEditCourse() {
        this.courses[1].category = 'ADVANCED';
        this.courses.push(undefined); // triggers .changes.subs
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
    }


}
