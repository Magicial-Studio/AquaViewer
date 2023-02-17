import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        TranslateModule
    ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {
}
