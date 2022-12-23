import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaysComponent } from './newpays.component';

describe('NewpaysComponent', () => {
  let component: NewpaysComponent;
  let fixture: ComponentFixture<NewpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
