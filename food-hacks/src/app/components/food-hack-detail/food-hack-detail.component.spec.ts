import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHackDetailComponent } from './food-hack-detail.component';

describe('FoodHackDetailComponent', () => {
  let component: FoodHackDetailComponent;
  let fixture: ComponentFixture<FoodHackDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHackDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodHackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
