import { Component, inject, EventEmitter, Output } from '@angular/core';
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
  @Output() orderAdded = new EventEmitter<void>();
  dialog = inject(MatDialog);

  async openDialog() {
    const dialog = this.dialog.open(DialogForm, {
      width: '600px',
      data: {
        order: null,
      },
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.orderAdded.emit();
      }
    });
  }
}
