import { HttpInterceptorFn } from '@angular/common/http';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Read token and normalize common bad values
  const raw = localStorage.getItem('token');
  const normalized = (raw && raw !== 'undefined' && raw !== 'null') ? raw : null;

  if (normalized) {

    // If stored value already includes the Bearer prefix, strip it to avoid "Bearer Bearer ..."
    const token = normalized.startsWith('Bearer ') ? normalized.substring(7) : normalized;

    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(clonedRequest);

  }

  return next(req);

};