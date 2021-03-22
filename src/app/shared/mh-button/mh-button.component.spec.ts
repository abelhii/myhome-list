import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhButtonComponent } from './mh-button.component';

describe('MhButtonComponent', () => {
  let component: MhButtonComponent;
  let fixture: ComponentFixture<MhButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
