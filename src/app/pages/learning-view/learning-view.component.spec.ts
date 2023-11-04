import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningViewComponent } from './learning-view.component';

describe('LearningViewComponent', () => {
  let component: LearningViewComponent;
  let fixture: ComponentFixture<LearningViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
