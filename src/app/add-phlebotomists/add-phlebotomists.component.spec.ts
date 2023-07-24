import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhlebotomistsComponent } from './add-phlebotomists.component';

describe('AddPhlebotomistsComponent', () => {
  let component: AddPhlebotomistsComponent;
  let fixture: ComponentFixture<AddPhlebotomistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhlebotomistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhlebotomistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
