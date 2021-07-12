import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ConnectFormDirective } from './connect-form.directive';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ConnectFormDirective
  ],
  imports: [
    BrowserModule,
    // other imports ...
    StoreModule.forRoot({}),
    ReactiveFormsModule
  ],
  exports: [
    ConnectFormDirective
  ],
  providers: [
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
