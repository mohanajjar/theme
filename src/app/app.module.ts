import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NAV_DROPDOWN_DIRECTIVES} from './shared/nav-dropdown.directive';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './shared/sidebar.directive';
import {AsideToggleDirective} from './shared/aside.directive';
import {BreadcrumbsComponent} from './shared/breadcrumb.component';
import {LoginComponent} from './login/login.component';
import {RecoverPasswordComponent} from './login/recover.password.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

// Routing Module
import {AppRoutingModule,} from './app.routing';

// Layouts
import {FullLayoutComponent} from './layouts/full-layout.component';
import {SimpleLayoutComponent} from './layouts/simple-layout.component';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [
    DateValueAccessorModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    LoginComponent,
    RecoverPasswordComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
