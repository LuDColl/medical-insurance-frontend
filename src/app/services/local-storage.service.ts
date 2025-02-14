import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get isBrowser() {
    const isBrowser = isPlatformBrowser(this.platformId);
    return isBrowser;
  }

  setItem(key: string, value: string) {
    if (!this.isBrowser) return;
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    if (!this.isBrowser) return;
    return localStorage.getItem(key);
  }
}
