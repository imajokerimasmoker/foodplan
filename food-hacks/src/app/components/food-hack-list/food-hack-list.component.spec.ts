import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHackListComponent } from './food-hack-list.component';

describe('FoodHackListComponent', () => {
  let component: FoodHackListComponent;
  let fixture: ComponentFixture<FoodHackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodHackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
