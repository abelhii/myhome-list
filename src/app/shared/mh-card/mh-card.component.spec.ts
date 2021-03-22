import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhCardComponent } from './mh-card.component';

describe('MhCardComponent', () => {
  let component: MhCardComponent;
  let fixture: ComponentFixture<MhCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
