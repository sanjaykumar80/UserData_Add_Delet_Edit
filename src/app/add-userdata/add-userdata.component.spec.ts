import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserdataComponent } from './add-userdata.component';

describe('AddUserdataComponent', () => {
  let component: AddUserdataComponent;
  let fixture: ComponentFixture<AddUserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
