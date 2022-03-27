import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvpsswComponent } from './olvpssw.component';

describe('OlvpsswComponent', () => {
  let component: OlvpsswComponent;
  let fixture: ComponentFixture<OlvpsswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvpsswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvpsswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
