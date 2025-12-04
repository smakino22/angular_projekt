import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtractor } from './subtractor';

describe('Subtractor', () => {
  let component: Subtractor;
  let fixture: ComponentFixture<Subtractor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subtractor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subtractor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
