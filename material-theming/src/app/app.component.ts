import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../app/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'material-theming';
  theme = 'dark-theme';
  overlay: HTMLElement;
  subscribingToThemeChange: Subscription;


  constructor(private overlayContainer: OverlayContainer,
    private sharedService : SharedService
  ) {
    //overlayContainer.getContainerElement().classList.add('primary-theme');

    this.overlay = overlayContainer.getContainerElement();
  }
  ngOnDestroy(): void {
    this.subscribingToThemeChange.unsubscribe();
  }

  ngOnInit(): void {
    debugger
    this.overlay = this.overlayContainer.getContainerElement();
    //this.overlayContainer.getContainerElement().classList.add(this.theme);
    this.overlay.classList.add(this.theme);
    this.subscribingToThemeChange =this.sharedService.themeChangerAsObservable.subscribe(theme => {
      this.theme = theme;
      this.changeTheme();
    });
  }

  changeTheme() {
    debugger
    if (this.overlay.classList.contains('dark-theme')) {
      this.overlay.classList.remove('dark-theme');
      this.overlay.classList.add(this.theme);
    } else if (this.overlay.classList.contains('primary-theme')) {
      this.overlay.classList.remove('primary-theme');
      this.overlay.classList.add(this.theme);
    }
    else if (this.overlay.classList.contains('custom-dark-theme')) {
      this.overlay.classList.remove('custom-dark-theme');
      this.overlay.classList.add(this.theme);
    }
    else {
      this.overlay.classList.add(this.theme);
    }
    debugger
  }
}
