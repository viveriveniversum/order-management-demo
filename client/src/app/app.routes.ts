import { Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

export const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: '**', redirectTo: '' }, // Redirect to home for any other routes
];
