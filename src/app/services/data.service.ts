import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../componentes/stock/stock.component';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dataSource = new BehaviorSubject<any>([]);
    currentData = this.dataSource.asObservable();

    updateList(data: Product) {
        this.dataSource.next(data);
    }
}