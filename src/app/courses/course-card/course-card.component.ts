import {
    Attribute,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, ElementRef, Inject, Injector, OnChanges, OnDestroy, SimpleChanges, ViewChild, ContentChild, TemplateRef
} from '@angular/core';
import {Course} from '../../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';
import {CoursesService} from '../courses.service';



@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
 
    // ViewChild ng-content'in icindekini goremez so;

    @ContentChild(CourseImageComponent)
    courseImageComponent: CourseImageComponent;

    @ContentChild(CourseImageComponent, { read: ElementRef })
    courseImageElementRef: ElementRef;

    // ContentChildren is also same as ViewChildren;

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    @Input()
    noImageTemplate: TemplateRef<any>;

    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string) {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Gets invoked whenever the input value gets changed.
    }
    ngOnInit() {

    }
    ngDoCheck(): void {

    }
    ngAfterContentInit(): void {
        // External child components can be included by Angular using this method within the <ng-content> </ng-content> tag
    }
    ngAfterContentChecked() {
        // It plays a big role in the initialization of the child component.
    }
    ngAfterViewInit(): void {
        // do not modify the data that component try to render
    }
    ngAfterViewChecked(): void {
        // When something is awaited from the child component, this component can be helpful.
    }
    ngOnDestroy(): void {
        // This is the clean-up phase just use before Angular destroys the directive/component
    }

    // 1 2 3 4 5 6 7 3 5 7


    // ViewChild    => earliest access -> ngAfterViewInit
    // ContentChild => earliest access -> ngAfterContentInit

    onTitleChanged(newTitle: string) {

        this.course.description = newTitle;

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }


    getCourseCardClasses() {
        return {
            'beginner': this.course.category === 'BEGINNER'
        }
    }

    getCourseCardStyles() {
        if (this.course.category === 'BEGINNER') {
            return {
                'background-image': `url(${this.course.iconUrl})`
            }
        }
    }

}
