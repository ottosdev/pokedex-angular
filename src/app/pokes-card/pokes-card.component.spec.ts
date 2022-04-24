import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokesCardComponent } from './pokes-card.component';

describe('PokesCardComponent', () => {
  let component: PokesCardComponent;
  let fixture: ComponentFixture<PokesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
