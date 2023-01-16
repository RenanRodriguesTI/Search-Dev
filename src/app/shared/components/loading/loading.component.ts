import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { LoadingService } from '@services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{

  constructor(
    private loadingService: LoadingService
 ) { }

  // The screen starts with the maximum opacity
  public opacityChange = 1;

  public splashTransition:any;

  // First access the splash is visible
  public showSplash = true;

  readonly ANIMATION_DURATION = 1;

  private hideSplashAnimation() {
    // Setting the transition
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;

    setTimeout(() => {
       // After the transition is ended the showSplash will be hided
       this.showSplash = !this.showSplash;
    }, 1000);
  }




 ngOnInit(): void {

    // Somewhere the stop method has been invoked
    this.loadingService.subscribe((res: Subscription) => {
       this.hideSplashAnimation();
    });

 }
}
