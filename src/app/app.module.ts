import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CoursesModule} from './courses/courses.module';
import {CourseTitleComponent} from './course-title/course-title.component';
import {FormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        CourseTitleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoursesModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [CourseTitleComponent]
})
export class AppModule {

}
