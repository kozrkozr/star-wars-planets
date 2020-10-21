import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {
  NotificationService,
  NotificationsType,
} from '@app/core/services/notification/notification.service';

const DEFAULT_ERROR_MESSAGE = 'Something going wrong';

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.notificationService.notify(
            err.message || DEFAULT_ERROR_MESSAGE,
            NotificationsType.ERROR,
          );
        }
        return of(err);
      }),
    );
  }
}
