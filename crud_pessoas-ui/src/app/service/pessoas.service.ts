import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:9090/api/v1/pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  constructor(private http: HttpClient) {}

  getAllPessoas(): Observable<any[]> {
    return this.http.get<any[]>(BASIC_URL);
  }

  getPessoaById(id: number): Observable<any> {
    return this.http.get<any>(`${BASIC_URL}/${id}`);
  }

  createPessoa(pessoa: any): Observable<any> {
    if (!pessoa.nome || !pessoa.idade || !pessoa.genero || !pessoa.telefone) {
      throw new Error('Campos obrigatórios faltando!');
    }
  
    return this.http.post(BASIC_URL, pessoa);
  }

  updatePessoa(id: number, pessoa: any): Observable<any> {
    if (!id || !pessoa) {
      throw new Error('ID ou dados inválidos para atualização');
    }
    
    return this.http.put(`${BASIC_URL}/${id}`, pessoa);
  }

  deletePessoa(id: number): Observable<any> {
    if (!id) {
      throw new Error('ID inválido para exclusão');
    }
    
    return this.http.delete(`${BASIC_URL}/${id}`);
  }
}
