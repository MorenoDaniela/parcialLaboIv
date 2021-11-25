import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPaisComponent } from './producto-pais.component';

describe('ProductoPaisComponent', () => {
  let component: ProductoPaisComponent;
  let fixture: ComponentFixture<ProductoPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
