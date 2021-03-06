import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerDetailsDocumentsComponent } from './producer-details-documents.component';

describe('ProducerDetailsDocumentsComponent', () => {
  let component: ProducerDetailsDocumentsComponent;
  let fixture: ComponentFixture<ProducerDetailsDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerDetailsDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerDetailsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
