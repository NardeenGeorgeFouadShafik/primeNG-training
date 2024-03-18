import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePartTwoComponent } from './table-part-two.component';

describe('TablePartTwoComponent', () => {
  let component: TablePartTwoComponent;
  let fixture: ComponentFixture<TablePartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePartTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
