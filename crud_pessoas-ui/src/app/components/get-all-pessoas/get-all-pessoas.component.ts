import { Component, inject } from '@angular/core';
import { PessoasService } from '../../service/pessoas.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-pessoas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-pessoas.component.html',
  styleUrl: './get-all-pessoas.component.css'
})
export class GetAllPessoasComponent {
  pessoas: any[] = [];
  private pessoasService = inject(PessoasService);
  private router = inject(Router);

  constructor() {
    this.fetchPessoas();
  }

  fetchPessoas() {
    this.pessoasService.getAllPessoas().subscribe({
      next: (res) => this.pessoas = res,
      error: (err) => console.error('Erro ao buscar pessoas:', err)
    });
  }

  deletePessoa(id: number) {
    if (!id || isNaN(id)) {
      console.error('ID inválido');
      return;
    }
  
    this.pessoasService.deletePessoa(id).subscribe({
      next: () => {
        console.log(`Pessoa ${id} excluída.`);
        this.fetchPessoas();
      },
      error: (err) => console.error('Erro ao excluir pessoa:', err)
    });
  }
  
  updatePessoa(id: number) {
    if (!id || isNaN(id)) {
      console.error('ID inválido');
      return;
    }
    
    this.router.navigate([`/update/${id}`]);
  }
  
  createPessoa() {
    this.router.navigate([`/create`]);
  }
}
