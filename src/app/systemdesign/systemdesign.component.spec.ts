import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemdesignComponent } from './systemdesign.component';

describe('SystemdesignComponent', () => {
  let component: SystemdesignComponent;
  let fixture: ComponentFixture<SystemdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemdesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
