import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskMenuComponent } from './add-task-menu.component';

describe('AddTaskMenuComponent', () => {
  let component: AddTaskMenuComponent;
  let fixture: ComponentFixture<AddTaskMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
