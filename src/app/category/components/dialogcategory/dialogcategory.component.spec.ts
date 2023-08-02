import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcategoryComponent } from './dialogcategory.component';

describe('DialogcategoryComponent', () => {
  let component: DialogcategoryComponent;
  let fixture: ComponentFixture<DialogcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogcategoryComponent]
    });
    fixture = TestBed.createComponent(DialogcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
