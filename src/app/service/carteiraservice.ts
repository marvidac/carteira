import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Carteira } from '../domain/Carteira';

@Injectable({
    providedIn: 'root'
})
export class CarteiraService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    carteiraNames: string[] = [
        "Carteira 1", 
        "Carteira 2", 
        "Dividendos", 
        "FII's", 
        "FI's", 
        "Brown Purse", 
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getCarteiraSmall() {
        return this.http.get<any>('assets/data/carteira.json')
        .toPromise()
        .then(res => <Carteira[]>res.data)
        .then(data => { return data; });
    }

    getCarteiras() {
        return this.http.get<any>('assets/data/carteira.json')
        .toPromise()
        .then(res => <Carteira[]>res.data)
        .then(data => { return data; });
    }

    getCarteirasWithOrdersSmall() {
        return this.http.get<any>('assets/data/carteira.json')
        .toPromise()
        .then(res => <Carteira[]>res.data)
        .then(data => { return data; });
    }

    generateCarteira(): Carteira {
        const Carteira: Carteira =  {
            id: this.generateId(),
            name: this.generateName(),
            cdi: true
        };

        return Carteira;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }

    generateName() {
        return this.carteiraNames[Math.floor(Math.random() * Math.floor(30))];
    }
}