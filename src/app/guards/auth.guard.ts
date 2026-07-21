import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Authentication } from '../services/authentication/authentication';


export const authGuard: CanActivateFn = (route, state) => {


  const authentication = inject(Authentication);

  const router = inject(Router);



  if(authentication.isLoggedIn()) {

    return true;

  }



  router.navigate(['/login']);

  return false;

};