import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePetComponent } from './page-pet.component';

describe('PagePetComponent', () => {
  let component: PagePetComponent;
  let fixture: ComponentFixture<PagePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
