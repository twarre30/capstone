import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventsComponent } from './events/events.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { RemoveMemberComponent } from './remove-member/remove-member.component';

const routes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'directory', component: DirectoryComponent,
      children: [
      { path: 'member-form', component: MemberFormComponent },
      { path: 'edit-member', component: EditMemberComponent },
      { path: 'remove-member', component: RemoveMemberComponent },
    ]
  },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

const formRoutes: Routes = [
  { path: 'member-form', component: MemberFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [DirectoryComponent, MemberFormComponent, EditMemberComponent, RemoveMemberComponent];
