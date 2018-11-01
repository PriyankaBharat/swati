import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdThreeComponent } from './prod-three.component';

describe('ProdThreeComponent', () => {
  let component: ProdThreeComponent;
  let fixture: ComponentFixture<ProdThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
