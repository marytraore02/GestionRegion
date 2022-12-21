import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelRegionComponent } from './newregion.component';

describe('NewregionComponent', () => {
  let component: NouvelRegionComponent;
  let fixture: ComponentFixture<NouvelRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
