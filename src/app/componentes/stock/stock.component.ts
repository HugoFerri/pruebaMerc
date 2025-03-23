import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StockService } from 'src/app/services/stock.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  stockItems: Product[] = []
  displayedColumns: string[] = ['name', 'price', 'format', 'brand', 'icon'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Product>(this.stockItems);

  constructor(
    private stockService: StockService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.stockService.getAll().subscribe((data: Product[]) => {
      this.stockItems = data;
      this.dataSource.data = this.stockItems;
    });

    this.dataService.currentData.subscribe(newItem => {
      this.dataSource.data.push(newItem)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteItem(item: any) {
    const index = this.stockItems.findIndex(p => p.id === item.id);

    if (index !== -1) {
      this.stockItems.splice(index, 1);
      this.dataSource.data = this.stockItems;
    }
  }
}

export interface Product {
  id: string;
  key: string;
  name: string;
  price: string;
  brand: string;
  format: string;
  icon: string;
}