import { Injectable } from '@angular/core';
import { CanDeactivate, CanDeactivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<unknown> {

  canDeactivate(): boolean {
    return confirm('Do you wish to Exit');
  }
}

export const formGuardFn: CanDeactivateFn<unknown> = (): boolean => confirm('Do you wish to Exit');
