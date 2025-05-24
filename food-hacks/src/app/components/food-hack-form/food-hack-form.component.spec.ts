import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHackFormComponent } from './food-hack-form.component';

describe('FoodHackFormComponent', () => {
  let component: FoodHackFormComponent;
  let fixture: ComponentFixture<FoodHackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHackFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodHackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
