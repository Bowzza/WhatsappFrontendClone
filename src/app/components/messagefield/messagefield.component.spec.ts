import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagefieldComponent } from './messagefield.component';

describe('MessagefieldComponent', () => {
  let component: MessagefieldComponent;
  let fixture: ComponentFixture<MessagefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagefieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
