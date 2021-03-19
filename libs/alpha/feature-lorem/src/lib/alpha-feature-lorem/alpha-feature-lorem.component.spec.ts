import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaFeatureLoremComponent } from './alpha-feature-lorem.component';

describe('AlphaFeatureLoremComponent', () => {
  let component: AlphaFeatureLoremComponent;
  let fixture: ComponentFixture<AlphaFeatureLoremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaFeatureLoremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaFeatureLoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
