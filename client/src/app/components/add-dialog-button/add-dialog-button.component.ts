import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogForm } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'add-dialog-button',
  template: `
    <button mat-fab extended (click)="openDialog()">
      <mat-icon fontIcon="add"></mat-icon>
      Add Order
    </button>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIcon],
})
export class AddDialogButton {
  dialog = inject(MatDialog);

  async openDialog() {
    this.dialog.open(DialogForm, {
      width: '600px',
      data: {
        order: null,
      },
    });
  }
}
