import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokesListComponent } from './pokes-list.component';

describe('PokesListComponent', () => {
  let component: PokesListComponent;
  let fixture: ComponentFixture<PokesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
