import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './auth/login/login.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'members/:username', component: MemberDetailComponent, resolve: { member: MemberDetailedResolver } },
      { path: 'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard] },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] }
    ]
  },
  { path: 'errors', component: TestErrorsComponent, canActivate: [AdminGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent, canActivate: [AdminGuard] },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
