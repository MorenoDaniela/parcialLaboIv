import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContainerComponent } from './lista-container.component';

describe('ListaContainerComponent', () => {
  let component: ListaContainerComponent;
  let fixture: ComponentFixture<ListaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
