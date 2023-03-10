import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        LayoutModule,
        FormsModule,
        AppRoutingModule,

        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        TranslateModule,
    ],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {
}
