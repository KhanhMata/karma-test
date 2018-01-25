import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerInlineComponent } from './banner-inline.component';

describe('BannerInlineComponent', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let debugEle: DebugElement;
  let htmlEle: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInlineComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInlineComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    debugEle = fixture.debugElement.query(By.css('h3'));
    htmlEle = debugEle.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    // fixture.detectChanges();
    expect(htmlEle.textContent).toContain(component.title);
  });

  it('should still see original title after com.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';

    expect(htmlEle.textContent).toContain(oldTitle);
  });

  it('should display updated tilte after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(htmlEle.textContent).toContain('Test Title');
  });
});
