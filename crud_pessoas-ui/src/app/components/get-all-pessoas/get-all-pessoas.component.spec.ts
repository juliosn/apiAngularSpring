import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPessoasComponent } from './get-all-pessoas.component';

describe('GetAllPessoasComponent', () => {
  let component: GetAllPessoasComponent;
  let fixture: ComponentFixture<GetAllPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllPessoasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
