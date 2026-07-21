import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Authentication } from '../services/authentication/authentication';


export const roleGuard: CanActivateFn = (route, state) => {


  const authentication = inject(Authentication);

  const router = inject(Router);



  const role = authentication.getRole();



  if(role === 'ADMIN') {

    return true;

  }



  router.navigate(['/dashboard']);

  return false;

};