import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddettagliComponent } from './carddettagli.component';

describe('CarddettagliComponent', () => {
  let component: CarddettagliComponent;
  let fixture: ComponentFixture<CarddettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddettagliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
