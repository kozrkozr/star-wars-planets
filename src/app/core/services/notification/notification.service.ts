import {NotificationsService} from 'angular2-notifications';

import {Injectable} from '@angular/core';

export enum NotificationsType {
  SUCCESS = 'success',
  ERROR = 'error',
  ALERT = 'alert',
  WARN = 'warn',
  INFO = 'info',
}

@Injectable({providedIn: 'root'})
export class NotificationService {
  constructor(private notificationsService: NotificationsService) {}

  notify(
    message: string,
    notificationType: NotificationsType = NotificationsType.INFO,
    title?: string,
  ): void {
    this.notificationsService[notificationType](title, message);
  }
}
