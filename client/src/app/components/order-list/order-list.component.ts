import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { DialogDataButton } from '../dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

import {
  AllCommunityModule,
  ModuleRegistry,
  GridReadyEvent,
  themeMaterial,
  GridApi,
} from 'ag-grid-community';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Order, OrderService } from '../../services/order.service';

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  id: string;
  customer: string;
  orderDate: string;
  status: string;
  totalAmount: number;
}

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [AgGridAngular, MatIcon, MatIconModule, MatButtonModule],
  template: `
    <div
      class="csv-button"
      style="display: flex; align-items: center; justify-content: flex-end; margin-bottom: 10px;"
    >
      <button
        mat-fab
        extended
        (click)="onBtnExport()"
        style="margin-right: 10px;  border: 1px solid rgb(84, 120, 198); color: aliceblue; border-radius: 10px; background-color: rgb(84, 120, 198);"
      >
        <mat-icon fontIcon="download"></mat-icon>
        Export CSV
      </button>
    </div>
    <ag-grid-angular
      [theme]="theme"
      style="width: 100%; height: 500px;"
      [rowData]="orders"
      [columnDefs]="colDefs"
      [defaultColDef]="defaultColDef"
      [pagination]="true"
      [paginationPageSize]="10"
      [rowHeight]="40"
      [headerHeight]="40"
      (gridReady)="onGridReady($event)"
    />
  `,
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  loading = false;
  error = '';
  public theme = themeMaterial;
  private gridApi!: GridApi;

  colDefs: ColDef<IRow>[] = [
    { field: 'id', headerName: 'Order ID', cellRenderer: DialogDataButton },
    { field: 'customer', headerName: 'Customer' },
    {
      field: 'orderDate',
      headerName: 'Order Date',

      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString();
      },
    },
    { field: 'status', headerName: 'Status' },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',

      valueFormatter: (params) => {
        return '€' + params.value.toFixed(2);
      },
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    filter: true,
  };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.orderService.getOrders().subscribe({
      next: (data) => {
        console.log('Orders loaded:', data);
        this.orders = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load orders';
        console.error('Error loading orders:', err);
        this.loading = true;
      },
    });
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
}
