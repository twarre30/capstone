import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
