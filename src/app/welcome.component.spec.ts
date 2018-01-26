import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';
import { UserService } from './user.service';
import { DebugElement } from '@angular/core';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let debugEle: DebugElement;
  let htmlEle: HTMLElement;

  let userServiceStub: UserService;
  let userService: UserService;

  beforeEach(async(() => {
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User' }
    };

    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [{ provide: UserService, useValue: userServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);

    debugEle = fixture.debugElement.query(By.css('.welcome'));
    htmlEle = debugEle.nativeElement;
  });

  it('stub object and injected UserService should not be the same', () => {

    expect(userServiceStub === userService).toBe(false);

    userServiceStub.isLoggedIn = false;

    expect(userService.isLoggedIn).toBe(true);
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = htmlEle.textContent;
    expect(content).toContain('Welcome', 'Welcome...');
    expect(content).toContain('Test User', 'expected name');
  });

  it('should welcome "Khanh IVIata', () => {
    userService.user.name = 'Khanh IVIata';
    fixture.detectChanges();
    expect(htmlEle.textContent).toContain('Khanh IVIata');
  });

  it('should request log in if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const content = htmlEle.textContent;
    expect(content).not.toContain('Welcome', 'not welcome');
    expect(content).toMatch(/log in/i, '"login"');
  });
});
