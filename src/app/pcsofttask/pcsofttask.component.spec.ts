import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsofttaskComponent } from './pcsofttask.component';

describe('PcsofttaskComponent', () => {
  let component: PcsofttaskComponent;
  let fixture: ComponentFixture<PcsofttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcsofttaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcsofttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
