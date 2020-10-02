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
  theme = 'primary-theme';
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
    //this.overlay.classList.add('dark-theme');
    this.subscribingToThemeChange =this.sharedService.themeChangerAsObservable.subscribe(theme => {
    this.theme = theme;
    });
  }
}
