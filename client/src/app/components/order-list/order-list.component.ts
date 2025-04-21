import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { themeMaterial } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
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
  imports: [AgGridAngular],
  template: `
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
    />
  `,
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  loading = false;
  error = '';
  public theme = themeMaterial;

  colDefs: ColDef<IRow>[] = [
    { field: 'id', headerName: 'Order ID' },
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
}
