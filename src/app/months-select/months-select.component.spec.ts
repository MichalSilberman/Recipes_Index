import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsSelectComponent } from './months-select.component';

describe('MonthsSelectComponent', () => {
  let component: MonthsSelectComponent;
  let fixture: ComponentFixture<MonthsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthsSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
