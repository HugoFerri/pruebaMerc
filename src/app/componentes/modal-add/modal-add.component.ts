import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})


export class ModalAddComponent implements OnInit {
  price: number = 0;
  item = {
    name: '',
    price: '',
    format: '',
    brand: ''
  };

  constructor(
    public dialogRef: MatDialogRef<ModalAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  save(item: any) {
    this.dialogRef.close(item);
  }

  cancel() {
    this.dialogRef.close();
  }
}
