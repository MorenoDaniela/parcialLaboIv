import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetalleComponent } from './container-detalle.component';

describe('ContainerDetalleComponent', () => {
  let component: ContainerDetalleComponent;
  let fixture: ComponentFixture<ContainerDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
