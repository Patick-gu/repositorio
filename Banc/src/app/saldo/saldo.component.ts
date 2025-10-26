import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-saldo-box',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css'],
  imports: [
    CurrencyPipe
  ]
})
export class SaldoBoxComponent implements OnInit {
  saldo: number | null = null;
  visivel: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarSaldo();
  }

  carregarSaldo() {
    this.http.get<{saldo: number}>('/api/saldo').subscribe({
      next: (res) => this.saldo = res.saldo,
      error: () => this.saldo = null
    });
  }

  toggleVisibilidade() {
    this.visivel = !this.visivel;
  }
}
