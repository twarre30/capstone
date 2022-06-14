import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DirectoryComponent } from './directory/directory.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { EventsComponent } from './events/events.component';
import { MemberListingComponent } from './member-listing/member-listing.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { FormLinksComponent } from './form-links/form-links.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    PageNotFoundComponent,
    NavigationComponent,
    DirectoryComponent,
    MemberFormComponent,
    EventsComponent,
    MemberListingComponent,
    EventListingComponent,
    FormLinksComponent,
    ArrayOfComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
