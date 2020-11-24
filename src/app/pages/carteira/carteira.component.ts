import { Component, OnInit } from '@angular/core';
import { Carteira } from '../../domain/carteira';
import { CarteiraService } from '../../service/carteiraservice';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  checked: boolean = false;

  carteiras: Carteira[];
  carteiraSelecionada: Carteira;

  modoEdicao: boolean = false;

  constructor(private carteiraService: CarteiraService) { }

  ngOnInit(): void {
    this.carteiraService.getCarteiras().then(carts => this.carteiras = carts);
  }

  selecionaParaEditar(carteira: Carteira) {
    this.carteiraSelecionada = carteira;
    console.log("Selecionou carteira " + carteira.name);
  }
  selecionaParaDeletar(carteira: Carteira) {
    this.carteiraSelecionada = carteira;
    console.log("Selecionou carteira " + carteira.name);
  }

}
