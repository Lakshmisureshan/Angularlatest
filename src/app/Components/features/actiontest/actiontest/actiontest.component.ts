import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICellEditorAngularComp, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellEditorParams, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actiontest',
  template: `
    <button (click)="onEdit()">Edit</button>
    <button (click)="onDelete()">Delete</button>
  `
})
export class ActiontestComponent implements ICellEditorAngularComp {
  @Input() value: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  private params: any;

  agInit(params: ICellEditorParams): void {
    this.params = params;
    // You can initialize any properties or perform any setup here if needed
  }

  getValue(): any {
    // Return the value to be saved or processed
    return this.params.data;
  }

  isPopup(): boolean {
    // Return true if this editor should appear in a popup dialog
    return false; // Change to true if it should appear in a popup
  }

  // Implement other optional methods if needed

  onEdit() {
    console.log('Edit clicked with data:', this.params.data);
    this.edit.emit(this.params.data);



    
  }

  onDelete() {
    this.delete.emit(this.params.data);
  }

  // Optional method implementations for ICellEditorAngularComp
  afterGuiAttached?(): void {}
  getPopupPosition?(): 'over' | 'under' | undefined { return undefined; }
  isCancelBeforeStart?(): boolean { return false; }
  isCancelAfterEnd?(): boolean { return false; }
  focusIn?(): void {}
  focusOut?(): void {}
}