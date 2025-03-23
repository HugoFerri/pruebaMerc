import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../componentes/stock/stock.component';

@Injectable({
    providedIn: 'root'
})
export class StockService {
    getAll(): Observable<Product[]> {
        return of([
            {
                id: "producto-0000000090100",
                key: "producto-0000000090100",
                price: "3€",
                brand: "SCHNEIDER",
                name: "Cerveza Botella Schneider x 1 Un",
                format: "1.0 un",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000000135559",
                key: "producto-0000000135559",
                name: "REJILLA COMPACTA COL",
                price: "2,75€",
                brand: "SIN MARCA",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000000136204",
                key: "producto-0000000136204",
                name: "REJ.SECAVAJ.43X55CM",
                price: "1.20€",
                brand: "SIN MARCA",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000000144278",
                key: "producto-0000000144278",
                name: "REJILLA AUTO 50X50CM",
                price: "1.10€",
                brand: "SIN MARCA",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000000498104",
                key: "producto-0000000498104",
                name: "LECHE L.V.ENTERA",
                price: "0.90€",
                brand: "SIN MARCA",
                format: "1.0 lt",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000000865463",
                key: "producto-0000000865463",
                price: "0.54€",
                brand: "SIN MARCA",
                name: "Trapo Piso Blanco Consorcio x 1 Un",
                format: "1.0 un",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000000865470",
                key: "producto-0000000865470",
                price: "1.24€",
                brand: "SIN MARCA",
                name: "Trapo Piso Gris Consorcio x 1 Un",
                format: "1.0 un",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000001034448",
                key: "producto-0000001034448",
                price: "3.14€",
                brand: "SIN MARCA",
                name: "Trapo Piso Mil Usos x 1 Un",
                format: "1.0 un",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000001121100",
                key: "producto-0000001121100",
                name: "PAÑO FRANELA CALIDAD",
                price: "4.84€",
                brand: "SIN MARCA",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000007048012",
                key: "producto-0000007048012",
                price: "2.05€",
                brand: "SALTA",
                name: "Cerveza Blanca Botella Salta x 1 Un",
                format: "1.0 un",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000007048029",
                key: "producto-0000007048029",
                name: "ESQUELETO CERV BLANC",
                price: "4.36€",
                brand: "SALTA",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000007048036",
                key: "producto-0000007048036",
                price: "1.29€",
                brand: "SALTA",
                name: "Cerveza Negra Botella Salta x 1 Un",
                format: "1.0 un",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000007048043",
                key: "producto-0000007048043",
                name: "ESQUELETO CERV NEGRA",
                price: "1€",
                brand: "SALTA",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000007048074",
                key: "producto-0000007048074",
                name: "ENVASE CERVEZA 1890",
                price: "1.38€",
                brand: "QUILM",
                format: "1.0 ml",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000007048081",
                key: "producto-0000007048081",
                name: "ESQUELETO CERV 1890",
                price: "2.50€",
                brand: "QUILM",
                format: "1.0 ud",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000040084107",
                key: "producto-0000040084107",
                name: "Huevo de Chocolate Kinder con Sorpresa Caja x 20 Gr",
                price: "10€",
                brand: "KINDER",
                format: "20.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000042277132",
                key: "producto-0000042277132",
                name: "Desmaquillador de Ojos Bifasico en Botella Nivea x 125 Ml",
                price: "5.69€",
                brand: "NIVEA",
                format: "125.0 ml",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000042300083",
                key: "producto-0000042300083",
                name: "Crema Facial Cuidado Nivea x 100 Ml",
                price: "8.46€",
                brand: "NIVEA",
                format: "100.0 ml",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000075024956",
                key: "producto-0000075024956",
                name: "Desodorante Antitranspirante en Barra V8 Rexona x 50 Gr",
                price: "7.14€",
                brand: "REXONA",
                format: "50.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000075026455",
                key: "producto-0000075026455",
                name: "Desodorante Stick Nutritivo Rexona x 50 Gr",
                price: "6.55€",
                brand: "REXONA",
                format: "50.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000075027513",
                key: "producto-0000075027513",
                name: "Desodorante Original Dove x 50 Gr",
                price: "2.40€",
                brand: "DOVE",
                format: "50.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000075032715",
                key: "producto-0000075032715",
                name: "Cerveza Corona x 335 Cc",
                price: "3.10€",
                brand: "CORONA",
                format: "355.0 cc",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000077900302",
                key: "producto-0000077900302",
                name: "Repelente Crema Off x 60 Gr",
                price: "4.25€",
                brand: "OFF",
                format: "60.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000077900845",
                key: "producto-0000077900845",
                name: "Galletitas BanÌƒadas con Chocolate con Relleno de Limon Terrabusi Tita x 18 Gr",
                price: "3.46€",
                brand: "TITA",
                format: "18.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000077903501",
                key: "producto-0000077903501",
                name: "Obleas Rellena Bagley Opera x 55 Gr",
                price: "4.14€",
                brand: "OPERA",
                format: "55.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000077903518",
                key: "producto-0000077903518",
                name: "Obleas Rellena Bagley Opera x 92 Gr",
                price: "1.15€",
                brand: "OPERA",
                format: "92.0 gr",
                icon: "delete"
            }
            ,
            {
                id: "producto-0000077903785",
                key: "producto-0000077903785",
                name: "Alfajor Mousse Triple Milka x 55 Gr",
                price: "1.20€",
                brand: "MILKA",
                format: "55.0 gr",
                icon: "delete"
            }
        ]);
    }

}