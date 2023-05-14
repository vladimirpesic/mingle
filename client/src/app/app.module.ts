import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './_modules/shared.module';

import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { HasRoleDirective } from './_directives/has-role.directive';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';

import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './auth/login/login.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { RegisterComponent } from './auth/register/register.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    ConfirmDialogComponent,
    DateInputComponent,
    HomeComponent,
    ListsComponent,
    LoginComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MemberMessagesComponent,
    MessagesComponent,
    NavComponent,
    NotFoundComponent,
    PhotoEditorComponent,
    PhotoManagementComponent,
    RegisterComponent,
    RolesModalComponent,
    ServerErrorComponent,
    TestErrorsComponent,
    TextInputComponent,
    UserManagementComponent,
    HasRoleDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerWhenStable:30000' }),
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
