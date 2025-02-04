import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePessoaComponent } from './update-pessoa.component';

describe('UpdatePessoaComponent', () => {
  let component: UpdatePessoaComponent;
  let fixture: ComponentFixture<UpdatePessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
