import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TOKEN } from './consts/local-storage.consts';
import { LOGIN } from './consts/routes.consts';
import { LocalStorageService } from './services/local-storage.service';

export const appGuard: CanActivateFn = (_, __) => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getItem(TOKEN);

  if (!token) {
    const router = inject(Router);
    const loginPath = router.parseUrl(LOGIN);
    return new RedirectCommand(loginPath);
  }

  return true;
};
