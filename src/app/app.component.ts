import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkTheme = true;
  oppositeThemeName = 'Light';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  folders = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'CSCC01',
      subtitle: 'Fall 2019',
      url: '/c01',
      icon: 'folder'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleTheme(event): void {
    this.isDarkTheme = event.checked;
    this.oppositeThemeName = this.isDarkTheme ? 'Light' : 'Dark';
  }
}
