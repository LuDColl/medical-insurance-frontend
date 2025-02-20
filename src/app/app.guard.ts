import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TOKEN } from './consts/local-storage.consts';
import { LocalStorageService } from './services/local-storage.service';
import { TO_LOGIN } from './consts/routes.consts';

export const appGuard: CanActivateFn = (_, __) => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getItem(TOKEN);

  if (!token) {
    const router = inject(Router);
    const url = router.createUrlTree([TO_LOGIN]);
    return url;
  }

  return true;
};
