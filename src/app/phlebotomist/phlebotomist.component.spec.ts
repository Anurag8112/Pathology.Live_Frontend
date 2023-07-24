import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhlebotomistComponent } from './phlebotomist.component';

describe('PhlebotomistComponent', () => {
  let component: PhlebotomistComponent;
  let fixture: ComponentFixture<PhlebotomistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhlebotomistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhlebotomistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
