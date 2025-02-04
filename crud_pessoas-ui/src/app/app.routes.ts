import { Routes } from '@angular/router';
import { PostPessoaComponent } from './components/post-pessoa/post-pessoa.component';
import { GetAllPessoasComponent } from './components/get-all-pessoas/get-all-pessoas.component';
import { UpdatePessoaComponent } from './components/update-pessoa/update-pessoa.component';

export const routes: Routes = [
    { path: '', component: GetAllPessoasComponent }, 
    { path: 'create', component: PostPessoaComponent },
    { path: 'update/:id', component: UpdatePessoaComponent }
];
