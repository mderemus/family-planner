/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KidTodoComponent } from './kid-todo.component';

describe('KidTodoComponent', () => {
  let component: KidTodoComponent;
  let fixture: ComponentFixture<KidTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
