import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoasService } from '../../service/pessoas.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pessoa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ADICIONADO ReactiveFormsModule
  templateUrl: './update-pessoa.component.html',
  styleUrl: './update-pessoa.component.css'
})
export class UpdatePessoaComponent {
  updatePessoaForm: FormGroup;
  private pessoasService = inject(PessoasService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  pessoaId!: number;

  constructor(private fb: FormBuilder) {
    this.updatePessoaForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(1)]],
      genero: ['', Validators.required],
      telefone: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.pessoaId = +params['id'];
      this.loadPessoa();
    });
  }

  loadPessoa() {
    if (!this.pessoaId || isNaN(this.pessoaId)) {
      console.error('ID inválido');
      this.router.navigate(['/']);
      return;
    }
  
    this.pessoasService.getPessoaById(this.pessoaId).subscribe({
      next: (pessoa) => this.updatePessoaForm.patchValue(pessoa),
      error: (err) => {
        console.error('Erro ao carregar pessoa:', err);
        this.router.navigate(['/']);
      }
    });
  }
  
  updatePessoa(): void {
    if (this.updatePessoaForm.invalid) {
      this.updatePessoaForm.markAllAsTouched();
      return;
    }
  
    this.pessoasService.updatePessoa(this.pessoaId, this.updatePessoaForm.value).subscribe({
      next: () => {
        console.log('Pessoa atualizada com sucesso');
        this.router.navigate(['/']);
      },
      error: (err) => console.error('Erro ao atualizar pessoa:', err)
    });
  }
}
