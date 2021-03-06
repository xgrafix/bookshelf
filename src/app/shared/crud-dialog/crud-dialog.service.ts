import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CrudDialogComponent } from './crud-dialog.component';
@Injectable()
export class CrudDialogService {
  constructor(private dialog: MatDialog) { }
  dialogRef!: MatDialogRef<CrudDialogComponent>;
  author?: string;

  public open(options: { title: any; message: any; cancelText: any; confirmText: any;
                          isbn: any; author: any; category: any; }) {
    this.dialogRef = this.dialog.open(CrudDialogComponent, {    
         data: {
          title: options.title,
          message: options.message,
          cancelText: options.cancelText,
          confirmText: options.confirmText,
           isbn: options.isbn,
           author: options.author,
           category: options.category
         }
    });
  }
  public confirmed(): Observable<any> {
    
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}