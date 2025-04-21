import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'dialog-button',
  template: `
    {{ params.value }}
    <button mat-button (click)="openDialog()">
      <mat-icon fontIcon="open_in_new"></mat-icon>
    </button>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIcon],
})
export class DialogDataButton implements ICellRendererAngularComp {
  dialog = inject(MatDialog);
  orderService = inject(OrderService);
  params!: ICellRendererParams;

  agInit(params: ICellRendererParams) {
    this.params = params;
  }

  refresh(params: ICellRendererParams) {
    this.params = params;
    return true;
  }

  async openDialog() {
    const orderId = this.params.value;

    this.orderService.getOrderById(orderId).subscribe({
      next: (order) => {
        this.dialog.open(DialogDataExampleDialog, {
          width: '600px',
          data: {
            order: order,
          },
        });
      },
      error: (err) => {
        console.error('Error fetching order details:', err);
      },
    });
  }
}

@Component({
  selector: 'dialog',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatTableModule,
    MatDialogClose,
    MatButtonModule,
  ],
})
export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
}
