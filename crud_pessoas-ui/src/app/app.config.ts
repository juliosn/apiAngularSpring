import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { PostPessoaComponent } from './components/post-pessoa/post-pessoa.component';
import { GetAllPessoasComponent } from './components/get-all-pessoas/get-all-pessoas.component';
import { UpdatePessoaComponent } from './components/update-pessoa/update-pessoa.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

NgModule({
  declarations: [
    AppComponent,
    PostPessoaComponent,
    GetAllPessoasComponent,
    UpdatePessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ]
})

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],
};
