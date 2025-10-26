import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EntradaService } from '../services/entrada.service';
import { entrada } from '../models/entrada';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule,

  
  ]
})
export class EntradasComponent implements OnInit {
  Entrada: entrada ={
  id: '',
  descricao: '',
  valor:0,
  data:''
  }
  entradas: entrada[]=[];
  

  displayedColumns: string[] = ['descricao', 'valor', 'data', 'acoes'];
  dataSource = new MatTableDataSource<entrada>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private entradaService: EntradaService,
    private toast: ToastrService,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    this.carregarEntradas();
  }
  formatData(data: Date): string{
    const mes= String(data.getMonth()).padStart(2, '0');
    const dia= String(data.getDate()).padStart(2, '0');
    return `${dia}/${mes}`;  
  }

  carregarEntradas(): void {
    this.entradaService.viewEntrada().subscribe(resposta => {
      this.dataSource.data = resposta;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  editarEntrada(entrada: entrada): void {
    console.log('Editar:', entrada);
    // Aqui você pode chamar uma rota ou abrir um dialog
  }

  deletarEntrada(entrada: entrada): void {
    console.log('Deletar:', entrada);
    // Lógica para deletar (com confirmação)
  }

  criarEntrada(){
    const DateFormat= this.formatData(new Date(this.Entrada.data));
    this.Entrada.data= DateFormat;
    this.entradaService.criarEntrada(this.Entrada).subscribe(()=> {
      this.router.navigate(['entrada']);
      this.entradas.unshift({...this.Entrada});
      }, ex =>{
      console.log(ex)
      if(ex.error.erros){
        ex.error.erros.forEach((erroMsg: string) => {
          this.toast.error(erroMsg);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })

  }
}
