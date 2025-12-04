import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplier } from './multiplier';

describe('Multiplier', () => {
  let component: Multiplier;
  let fixture: ComponentFixture<Multiplier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multiplier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
