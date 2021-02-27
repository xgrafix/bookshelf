import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { CrudDialogService } from './crud-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CrudDialogComponent } from './crud-dialog.component';
@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
    ],
    declarations: [
        CrudDialogComponent
    ],
    exports: [CrudDialogComponent],
    entryComponents: [CrudDialogComponent],
    providers: [CrudDialogService]
  })
  export class CrudDialogModule {
  }