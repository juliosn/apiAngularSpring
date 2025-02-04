import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoasService } from '../../service/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-pessoa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-pessoa.component.html',
  styleUrl: './post-pessoa.component.css'
})
export class PostPessoaComponent {
  createPessoaForm: FormGroup;
  private pessoasService = inject(PessoasService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.createPessoaForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(1)]],
      genero: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  createPessoa(): void {
    if (this.createPessoaForm.invalid) {
      this.createPessoaForm.markAllAsTouched();
      return;
    }
  
    this.pessoasService.createPessoa(this.createPessoaForm.value).subscribe({
      next: () => {
        console.log('Pessoa criada:');
        this.router.navigate(['/']);
      } ,
      error: (err) => console.error('Erro ao criar pessoa:', err)
    });
  }
}
