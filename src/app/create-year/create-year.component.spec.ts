import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYearComponent } from './create-year.component';

describe('CreateYearComponent', () => {
  let component: CreateYearComponent;
  let fixture: ComponentFixture<CreateYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
