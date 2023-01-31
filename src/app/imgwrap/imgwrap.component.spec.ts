import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgwrapComponent } from './imgwrap.component';

describe('ImgwrapComponent', () => {
  let component: ImgwrapComponent;
  let fixture: ComponentFixture<ImgwrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgwrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
