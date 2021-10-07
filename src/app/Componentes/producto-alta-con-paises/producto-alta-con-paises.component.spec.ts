import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAltaConPaisesComponent } from './producto-alta-con-paises.component';

describe('ProductoAltaConPaisesComponent', () => {
  let component: ProductoAltaConPaisesComponent;
  let fixture: ComponentFixture<ProductoAltaConPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoAltaConPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoAltaConPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
