import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhlebotomistListComponent } from './phlebotomist-list.component';

describe('PhlebotomistListComponent', () => {
  let component: PhlebotomistListComponent;
  let fixture: ComponentFixture<PhlebotomistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhlebotomistListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhlebotomistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
