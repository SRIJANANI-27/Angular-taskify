import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  ngOnInit(): void {
    this.loadProgress();
  }

  loadProgress(): void {
    const circularProgress = document.querySelector('.circular-progress') as HTMLElement;
    const progressValue = document.querySelector('.progress-value') as HTMLElement;
    const circularProgress2 = document.querySelector('.circular-progress2') as HTMLElement;
    const progressValue2 = document.querySelector('.progress-value2') as HTMLElement;
    const circularProgress3 = document.querySelector('.circular-progress3') as HTMLElement;
    const progressValue3 = document.querySelector('.progress-value3') as HTMLElement;

    let progressStartValue = 0;
    const progressEndValue = 40;
    let progressStartValue2 = 0;
    const progressEndValue2 = 60;
    let progressStartValue3 = 0;
    const progressEndValue3 = 80;
    const speed = 100;

    const progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

    const progress2 = setInterval(() => {
      progressStartValue2++;
      progressValue2.textContent = `${progressStartValue2}%`;
      circularProgress2.style.background = `conic-gradient(#FF5733 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

      if (progressStartValue2 === progressEndValue2) {
        clearInterval(progress2);
      }
    }, speed);

    const progress3 = setInterval(() => {
      progressStartValue3++;
      progressValue3.textContent = `${progressStartValue3}%`;
      circularProgress3.style.background = `conic-gradient(#50C878 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

      if (progressStartValue3 === progressEndValue3) {
        clearInterval(progress3);
      }
    }, speed);
  }

}
