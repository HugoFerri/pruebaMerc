import { Component, OnInit } from '@angular/core';
import { ModalAddComponent } from '../componentes/modal-add/modal-add.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataService.updateList(result);
    });
  }
}
