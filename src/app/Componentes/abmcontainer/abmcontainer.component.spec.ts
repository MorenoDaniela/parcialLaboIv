import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMContainerComponent } from './abmcontainer.component';

describe('ABMContainerComponent', () => {
  let component: ABMContainerComponent;
  let fixture: ComponentFixture<ABMContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
