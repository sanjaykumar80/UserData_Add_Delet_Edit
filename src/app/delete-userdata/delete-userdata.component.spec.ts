import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserdataComponent } from './delete-userdata.component';

describe('DeleteUserdataComponent', () => {
  let component: DeleteUserdataComponent;
  let fixture: ComponentFixture<DeleteUserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
