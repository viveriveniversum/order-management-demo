import { Component, inject } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dialog-form',
  templateUrl: 'dialog-form.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatTableModule,
    MatDialogClose,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./dialog-form.component.css'],
})
export class DialogForm {
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<DialogForm>);

  profileForm = this.formBuilder.group({
    customer: ['', Validators.required],
    items: this.formBuilder.array([this.createItem()]),
  });

  get items() {
    return this.profileForm.get('items') as FormArray;
  }

  get customer() {
    return this.profileForm.get('customer') as FormControl;
  }

  getItemControl(index: number, controlName: string): FormControl {
    return this.items.at(index).get(controlName) as FormControl;
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      productName: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  calculateSubtotal(item: FormGroup): number {
    const price = item.get('price')?.value || 0;
    const quantity = item.get('quantity')?.value || 0;
    return price * quantity;
  }

  calculateTotal(): number {
    return this.items.controls.reduce((total, item) => {
      return total + this.calculateSubtotal(item as FormGroup);
    }, 0);
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      // Mark all fields as touched to trigger validation display
      this.profileForm.markAllAsTouched();
      return;
    }

    const orderData = {
      customer: this.profileForm.get('customer')?.value,
      status: 'pending',
      orderDate: new Date().toISOString(),
      items: this.items.controls.map((item: any) => {
        const group = item as FormGroup;
        const price = group.get('price')?.value || 0;
        const quantity = group.get('quantity')?.value || 0;

        return {
          productName: group.get('productName')?.value,
          price: price,
          quantity: quantity,
          subtotal: price * quantity,
        };
      }),
      totalAmount: this.calculateTotal(),
    };

    console.log('Order data:', orderData);
    this.dialogRef.close(orderData);
  }
}
