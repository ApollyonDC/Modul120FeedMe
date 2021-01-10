import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedMePage } from './feed-me.page';

describe('FeedMePage', () => {
  let component: FeedMePage;
  let fixture: ComponentFixture<FeedMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
