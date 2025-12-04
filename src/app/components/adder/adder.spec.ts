import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adder } from './adder';

describe('Adder', () => {
  let component: Adder;
  let fixture: ComponentFixture<Adder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
