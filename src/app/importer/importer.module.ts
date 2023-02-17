import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImporterComponent} from './importer/importer.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [ImporterComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
    ]
})
export class ImporterModule {
}
