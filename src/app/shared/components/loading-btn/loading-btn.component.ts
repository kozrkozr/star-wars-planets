import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-loading-btn',
  templateUrl: './loading-btn.component.html',
  styleUrls: ['./loading-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBtnComponent {
  @Input() loadMoreText = 'Load more';

  @Input() loadingText = 'Loading...';

  @Input() isLoading: boolean;

  @Output() clicked = new EventEmitter();

  get btnText(): string {
    return this.isLoading ? this.loadingText : this.loadMoreText;
  }
}
