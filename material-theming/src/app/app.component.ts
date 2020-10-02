import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'material-theming';
    theme = 'light-theme';
    overlay: HTMLElement;
    constructor(private overlayContainer: OverlayContainer) {
        this.overlay = overlayContainer.getContainerElement();

    }
    ngOnInit(): void {
        this.overlayContainer.getContainerElement().classList.add(this.theme);
    }
}
